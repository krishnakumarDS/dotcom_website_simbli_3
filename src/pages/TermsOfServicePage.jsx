import React from 'react';
import './GenericPage.css';

const TermsOfServicePage = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1 className="generic-page-title">Terms of Service</h1>
        <div className="generic-page-content">
          <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

          <h2>1. Agreement to Terms</h2>
          <p>By using our Services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, do not use the Services. If you are accessing and using the Services on behalf of a company (such as your employer) or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>

          <h2>2. Your Account</h2>
          <p>You may be required to create an account to use some of our Services. You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.</p>

          <h2>3. Content</h2>
          <p>You are responsible for your use of the Services and for any Content you provide, including compliance with applicable laws, rules, and regulations. You should only provide Content that you are comfortable sharing with others.</p>
          
          <h2>4. Termination</h2>
          <p>We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>

          <h2>5. Changes to Terms or Services</h2>
          <p>We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;