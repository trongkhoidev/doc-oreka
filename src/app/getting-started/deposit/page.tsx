import React from 'react';
import Link from 'next/link';

export default function DepositPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Funding Your Oreka System
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Learn how to fund and maintain your Oreka telephony recording system, including hardware costs, 
          licensing fees, cloud services, and operational expenses.
        </p>
      </div>

      {/* Funding Methods */}
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardware Investment</h2>
          <p className="text-gray-700 mb-4">
            Initial hardware setup for your Oreka telephony recording system, including servers, 
            storage devices, and network equipment.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-2">Essential Components:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Recording servers (OrkAudio)</li>
              <li>Database servers (PostgreSQL)</li>
              <li>Storage arrays (NAS/SAN)</li>
              <li>Network switches and routers</li>
              <li>Uninterruptible Power Supplies (UPS)</li>
              <li>Backup and disaster recovery systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Software Licensing</h2>
          <p className="text-gray-700 mb-4">
            Software licenses and subscriptions required for the Oreka system components.
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold text-blue-900 mb-2">Licensing Options:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Open-source core (free)</li>
              <li>Enterprise features (subscription)</li>
              <li>Professional support packages</li>
              <li>Custom development services</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cloud Services & Infrastructure</h2>
          <p className="text-gray-700 mb-4">
            Cloud-based services for hosting, storage, and scaling your Oreka system.
          </p>
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="font-semibold text-green-900 mb-2">Cloud Options:</h3>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>AWS, Azure, or Google Cloud</li>
              <li>Managed Kubernetes services</li>
              <li>Object storage (S3, Blob, Cloud Storage)</li>
              <li>CDN for global access</li>
              <li>Load balancers and auto-scaling</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Operational Costs</h2>
          <p className="text-gray-700 mb-4">
            Ongoing operational expenses for maintaining and running your Oreka telephony system.
          </p>
          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-semibold text-purple-900 mb-2">Monthly Expenses:</h3>
            <ul className="list-disc list-inside space-y-1 text-purple-800">
              <li>Electricity and cooling</li>
              <li>Internet bandwidth and connectivity</li>
              <li>Backup storage and archival</li>
              <li>Monitoring and alerting services</li>
              <li>Security and compliance tools</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services</h2>
          <p className="text-gray-700 mb-4">
            Professional services for implementation, training, and ongoing support.
          </p>
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-semibold text-orange-900 mb-2">Service Packages:</h3>
            <ul className="list-disc list-inside space-y-1 text-orange-800">
              <li>System design and architecture</li>
              <li>Installation and configuration</li>
              <li>Staff training and certification</li>
              <li>24/7 technical support</li>
              <li>Regular maintenance and updates</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Return on Investment</h2>
          <p className="text-gray-700 mb-4">
            Understanding the financial benefits and cost savings from implementing Oreka.
          </p>
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-semibold text-indigo-900 mb-2">ROI Benefits:</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-800">
              <li>Reduced manual recording costs</li>
              <li>Improved compliance and risk management</li>
              <li>Enhanced customer service quality</li>
              <li>Operational efficiency gains</li>
              <li>Scalable growth without proportional cost increase</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Contact our team to discuss your specific requirements and get a customized quote.
          </p>
          <div className="space-x-4">
            <Link 
              href="/getting-started"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Installation Guide
            </Link>
            <Link 
              href="/developer-guide"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Developer Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
