import React from 'react';
import './GenericPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1 className="generic-page-title">Privacy Policy</h1>
        <div className="generic-page-content">
          <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

          <p>Simbli AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
          <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul>
            <li>Name and Contact Data.</li>
            <li>Credentials.</li>
            <li>Payment Data.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

          <h2>Will Your Information Be Shared With Anyone?</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@simbli.ai">privacy@simbli.ai</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;