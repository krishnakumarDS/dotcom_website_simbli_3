import React from 'react';
import './GenericPage.css';

const AboutUsPage = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1 className="generic-page-title">About Simbli AI</h1>
        <div className="generic-page-content">
          <p>Simbli AI was founded on a simple yet powerful idea: to make artificial intelligence accessible, practical, and transformative for every business. In a world overflowing with data and complexity, we saw the need for intelligent systems that could not only process information but also act upon it autonomously.</p>
          
          <h2>Our Mission</h2>
          <p>Our mission is to empower organizations to achieve peak efficiency and innovation by providing a suite of autonomous AI agents. We build tools that handle the repetitive, complex, and data-intensive tasks, freeing human talent to focus on creativity, strategy, and growth.</p>

          <h2>Our Vision</h2>
          <p>We envision a future where intelligent agents are integral partners in every business process, working alongside human teams to solve the world's most challenging problems. Simbli AI aims to be at the forefront of this collaborative intelligence revolution, driving progress and creating new opportunities.</p>

          <h2>The Team</h2>
          <p>Simbli AI is composed of a diverse team of AI researchers, software engineers, data scientists, and product visionaries. With backgrounds from leading tech companies and academic institutions, we share a passion for pushing the boundaries of what's possible with artificial intelligence. We believe in a culture of continuous learning, radical collaboration, and unwavering commitment to our customers' success.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;