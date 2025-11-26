import React from 'react';
import './GenericPage.css';

const DisclaimerPage = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1 className="generic-page-title">Disclaimer</h1>
        <div className="generic-page-content">
          <p>The information provided by Simbli AI ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
          
          <h2>No Professional Advice</h2>
          <p>The information contained in or made available through our site cannot replace or substitute for the services of trained professionals in any field, including, but not limited to, financial, medical, psychological, or legal matters. We are not responsible for any decisions made by you based on the information provided on this website.</p>

          <h2>External Links Disclaimer</h2>
          <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
          
          <h2>Testimonials Disclaimer</h2>
          <p>The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;