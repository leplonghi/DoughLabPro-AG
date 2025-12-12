import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const CookiesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('general.cookie_policy')} lastUpdated="August 1, 2024">
      <h3>1. What Are Cookies</h3>
      <p>Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

      <h3>2. How We Use Cookies</h3>
      <p>We use cookies for several reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

      <h3>3. The Cookies We Set</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>{t('ui.account_related_cookies')}</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
        </li>
        <li>
          <strong>{t('ui.login_related_cookies')}</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
        </li>
        <li>
          <strong>{t('ui.site_preferences_cookies')}</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
        </li>
      </ul>

      <h3>4. Third Party Cookies</h3>
      <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>{t('ui.google_analytics')}</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
        </li>
      </ul>

      <h3>5. Disabling Cookies</h3>
      <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>
    </LegalPageLayout>
  );
};

export default CookiesPage;
