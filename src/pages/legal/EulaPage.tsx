import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import {
  LEGAL_COMPANY_NAME,
  LEGAL_LAST_UPDATED,
} from './legalConfig';

const EulaPage: React.FC = () => {
  return (
    <LegalPageLayout title="End User License Agreement (EULA)" lastUpdated={LEGAL_LAST_UPDATED}>
      <h3>1. Scope of the license</h3>
      <p>
        This EULA governs the software layer of DoughLabPro made available to you through web, hosted, or app-like
        environments. Subject to compliance with applicable terms, {LEGAL_COMPANY_NAME} grants you a limited,
        non-exclusive, non-transferable, revocable license to access and use the software for your internal personal or
        business baking workflows.
      </p>

      <h3>2. Ownership</h3>
      <p>
        DoughLabPro and its software, interface, source structure, documentation, and related materials remain the
        property of {LEGAL_COMPANY_NAME} and its licensors. This EULA grants only a limited right to use the service; it
        does not transfer ownership of the software or any intellectual property rights.
      </p>

      <h3>3. Restrictions</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Do not sublicense, resell, lease, or commercially redistribute the software without written authorization.</li>
        <li>Do not reverse engineer, decompile, or disassemble the software except where non-waivable law expressly permits it.</li>
        <li>Do not remove, obscure, or alter legal notices, attribution, or proprietary marks embedded in the service.</li>
        <li>Do not use the software in a way that violates the Terms of Use, Privacy Policy, or applicable law.</li>
      </ul>

      <h3>4. Updates and hosted delivery</h3>
      <p>
        DoughLabPro may be updated automatically because the product is delivered through hosted infrastructure.
        Continued use after updates means you accept the revised software environment, subject to the current legal
        documents published by the service.
      </p>

      <h3>5. Termination</h3>
      <p>
        This license ends automatically if you breach the governing terms or if your access is lawfully suspended or
        terminated. Upon termination, your right to use the software stops immediately.
      </p>
    </LegalPageLayout>
  );
};

export default EulaPage;
