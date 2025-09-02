import React from 'react';

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  striped?: boolean;
  compact?: boolean;
}

export default function Table({ headers, rows, striped = false, compact = false }: TableProps) {
  if (!headers || !rows) {
    return <div className="text-gray-500">No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${compact ? 'text-sm' : ''}`}>
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  compact ? 'px-3 py-2' : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={striped && rowIndex % 2 === 1 ? 'bg-gray-50' : ''}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${
                    compact ? 'px-3 py-2' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
