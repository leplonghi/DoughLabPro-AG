import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const IpPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('general.intellectual_property')} lastUpdated="August 1, 2024">
      <h3>1. Copyright Protection</h3>
      <p>The Service and its original content, features, and functionality are and will remain the exclusive property of DoughLabPro and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DoughLabPro.</p>

      <h3>2. User Generated Content License</h3>
      <p>By posting any User Content on the Service, you expressly grant, and you represent and warrant that you have all rights necessary to grant, to DoughLabPro a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, syndicate, publicly perform, publicly display, and make derivative works of all such User Content and your name, voice, and/or likeness as contained in your User Content, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service and DoughLabPro’s (and its successors’ and affiliates’) business, including without limitation for promoting and redistributing part or all of the Service (and derivative works thereof) in any media formats and through any media channels.</p>

      <h3>3. Copyright Complaints (DMCA)</h3>
      <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement (t('common.infringement')) of any person.</p>
      <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of t('common.copyright_infringement') at legal@doughlabpro.com and include in your notice a detailed description of the alleged Infringement.</p>
    </LegalPageLayout>
  );
};

export default IpPage;
