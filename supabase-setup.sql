-- Supabase Setup Script for Oreka RAG System
-- Run this in your Supabase SQL Editor

-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the docs table for storing document chunks and embeddings
CREATE TABLE IF NOT EXISTS docs (
    id BIGSERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    metadata JSONB NOT NULL,
    embedding VECTOR(1536), -- OpenAI text-embedding-3-small dimension
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS docs_embedding_idx ON docs USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX IF NOT EXISTS docs_metadata_idx ON docs USING GIN (metadata);
CREATE INDEX IF NOT EXISTS docs_created_at_idx ON docs (created_at DESC);

-- Create a function to search for similar documents
CREATE OR REPLACE FUNCTION match_docs(
    query_embedding VECTOR(1536),
    match_threshold FLOAT DEFAULT 0.7,
    match_count INT DEFAULT 5
)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    metadata JSONB,
    similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        docs.id,
        docs.content,
        docs.metadata,
        1 - (docs.embedding <=> query_embedding) AS similarity
    FROM docs
    WHERE 1 - (docs.embedding <=> query_embedding) > match_threshold
    ORDER BY docs.embedding <=> query_embedding
    LIMIT match_count;
END;
$$;

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_docs_updated_at
    BEFORE UPDATE ON docs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create a function to get document statistics
CREATE OR REPLACE FUNCTION get_docs_stats()
RETURNS TABLE (
    total_docs BIGINT,
    total_chunks BIGINT,
    latest_update TIMESTAMP WITH TIME ZONE,
    avg_embedding_length FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(DISTINCT metadata->>'source') AS total_docs,
        COUNT(*) AS total_chunks,
        MAX(updated_at) AS latest_update,
        AVG(LENGTH(content)) AS avg_embedding_length
    FROM docs;
END;
$$;

-- Create a function to search by metadata
CREATE OR REPLACE FUNCTION search_by_metadata(
    search_query TEXT,
    search_limit INT DEFAULT 10
)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    metadata JSONB,
    relevance_score FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        docs.id,
        docs.content,
        docs.metadata,
        ts_rank(
            to_tsvector('english', content),
            plainto_tsquery('english', search_query)
        ) AS relevance_score
    FROM docs
    WHERE to_tsvector('english', content) @@ plainto_tsquery('english', search_query)
    ORDER BY relevance_score DESC
    LIMIT search_limit;
END;
$$;

-- Create a function to get documents by source
CREATE OR REPLACE FUNCTION get_docs_by_source(source_name TEXT)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        docs.id,
        docs.content,
        docs.metadata,
        docs.created_at
    FROM docs
    WHERE metadata->>'source' = source_name
    ORDER BY created_at DESC;
END;
$$;

-- Create a function to get documents by tag
CREATE OR REPLACE FUNCTION get_docs_by_tag(tag_name TEXT)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        docs.id,
        docs.content,
        docs.metadata,
        docs.created_at
    FROM docs
    WHERE metadata->'tags' ? tag_name
    ORDER BY created_at DESC;
END;
$$;

-- Insert some sample data for testing (optional)
-- INSERT INTO docs (content, metadata, embedding) VALUES (
--     'This is a sample document about Oreka telephony recording system.',
--     '{"title": "Sample Document", "source": "test.md", "tags": ["oreka", "telephony"]}',
--     '[0.1, 0.2, 0.3, ...]' -- 1536-dimensional vector
-- );

-- Create a view for easy document browsing
CREATE OR REPLACE VIEW docs_overview AS
SELECT
    id,
    metadata->>'title' AS title,
    metadata->>'source' AS source,
    metadata->>'section' AS section,
    metadata->'tags' AS tags,
    LENGTH(content) AS content_length,
    created_at,
    updated_at
FROM docs
ORDER BY created_at DESC;

-- Grant necessary permissions (adjust based on your Supabase setup)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON docs TO authenticated;
-- GRANT EXECUTE ON FUNCTION match_docs TO authenticated;
-- GRANT EXECUTE ON FUNCTION get_docs_stats TO authenticated;

-- Create a function to clean up old documents (optional)
CREATE OR REPLACE FUNCTION cleanup_old_docs(days_old INT DEFAULT 30)
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM docs
    WHERE created_at < NOW() - INTERVAL '1 day' * days_old;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$;

-- Create a function to reindex embeddings (useful after updates)
CREATE OR REPLACE FUNCTION reindex_embeddings()
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    REINDEX INDEX docs_embedding_idx;
END;
$$;

-- Display table structure
\d docs;

-- Display functions
\df match_docs;
\df get_docs_stats;
\df search_by_metadata;
\df get_docs_by_source;
\df get_docs_by_tag;

-- Test the setup
SELECT 'Setup completed successfully!' AS status;
