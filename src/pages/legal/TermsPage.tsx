import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('general.terms_of_use')} lastUpdated="August 1, 2024">
      <h3>1. Agreement to Terms</h3>
      <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and DoughLabPro (t('common.company'), "we", "us", or "our"), concerning your access to and use of the DoughLabPro application (the t('common.application')). By accessing the Application, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Use.</p>

      <h3>2. Intellectual Property Rights</h3>
      <p>Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the t('common.content')) and the trademarks, service marks, and logos contained therein (the t('common.marks')) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

      <h3>3. User Representations</h3>
      <p>By using the Application, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; and (4) you are not a minor in the jurisdiction in which you reside.</p>

      <h3>4. Prohibited Activities</h3>
      <p>You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

      <h3>5. User Generated Contributions</h3>
      <p>The Application may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, t('common.contributions')). Contributions may be viewable by other users of the Application and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.</p>

      <h3>6. Disclaimer of Warranties</h3>
      <div className="bg-dlp-bg-soft p-4 rounded border border-dlp-border text-sm">
        <p className="font-bold mb-2">THE APPLICATION IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE APPLICATION AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE APPLICATION AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
      </div>

      <h3>7. Limitation of Liability</h3>
      <div className="bg-dlp-bg-soft p-4 rounded border border-dlp-border text-sm mt-4">
        <p className="font-bold mb-2">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE APPLICATION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      </div>

      <h3>8. Food Safety Warning</h3>
      <p>Recipes and techniques provided by the Application are for educational purposes. <strong>{t('ui.you_adhere_to_food_safety_guidelines_at_your_own_r')}</strong> Consumption of raw or undercooked ingredients (eggs, flour, etc.) carries inherent health risks.</p>

      <h3>9. Governing Law</h3>
      <p>These Terms shall be governed by and defined following the laws of your jurisdiction. DoughLabPro and yourself irrevocably consent that the courts of your jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
    </LegalPageLayout>
  );
};

export default TermsPage;
