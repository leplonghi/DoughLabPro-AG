import React from 'react';
import LegalPageLayout from './LegalPageLayout';

const ContactPage: React.FC = () => {
  return (
    <LegalPageLayout title="Contact Information" lastUpdated="August 1, 2024">
      <h3>1. Customer Support</h3>
      <p>For general inquiries, technical support, or assistance with your account, please contact our support team:</p>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Email:</strong> support@doughlabpro.com</li>
      </ul>

      <h3 className="mt-6">2. Legal Inquiries</h3>
      <p>For legal notices, privacy-related requests (including GDPR/CCPA data subject requests), or intellectual property matters, please direct your correspondence to our Legal Department:</p>
      <div className="mt-4 p-4 bg-dlp-bg-soft rounded border border-dlp-border">
        <p className="font-semibold text-dlp-text-primary">DoughLabPro Legal Department</p>
        <p>Email: <a href="mailto:legal@doughlabpro.com" className="text-dlp-accent hover:underline">legal@doughlabpro.com</a></p>
        <p className="text-sm text-dlp-text-muted mt-2">Please allow up to 30 days for a response to formal legal requests.</p>
      </div>

      <h3 className="mt-6">3. Corporate Address</h3>
      <p><em>Mailing address available upon request for formal service of process.</em></p>
    </LegalPageLayout>
  );
};

export default ContactPage;
