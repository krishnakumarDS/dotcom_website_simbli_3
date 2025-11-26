import React from 'react';
import { FaCogs, FaChartLine, FaUsers, FaShieldAlt, FaBrain, FaSyncAlt } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">Meet Simbli AI</h1>
            <h2 className="hero-subtitle fade-in">Your Autonomous Agent Suite for Intelligent Automation</h2>
            <p className="hero-description fade-in">
              Unleash the power of AI agents that think, learn, and execute complex tasks on their own. Simbli AI provides a robust suite of autonomous agents to streamline your workflows, analyze data in real-time, and drive unprecedented business growth.
            </p>
            <div className="hero-buttons fade-in">
              <a href="#agents" className="btn btn-primary">Discover Agents</a>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image-container fade-in">
            <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop" alt="AI Brain Visualization" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Simbli AI?</h2>
          <div className="features-grid">
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaBrain /></div>
              <h3>Autonomous Operation</h3>
              <p>Our agents work 24/7 without human intervention, handling everything from data collection to complex decision-making.</p>
            </div>
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Multi-Agent Collaboration</h3>
              <p>Deploy teams of specialized agents that collaborate to solve intricate problems faster and more efficiently than ever before.</p>
            </div>
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Real-time Data Analysis</h3>
              <p>Instantly process and analyze vast datasets to uncover actionable insights, predict trends, and inform your strategy.</p>
            </div>
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaSyncAlt /></div>
              <h3>Seamless Integration</h3>
              <p>Easily connect Simbli AI agents with your existing tools and platforms, from CRMs to databases, for a unified workflow.</p>
            </div>
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h3>Advanced Security</h3>
              <p>Built with enterprise-grade security and data privacy at its core, ensuring your information is always protected.</p>
            </div>
            <div className="feature-card slide-in-up">
              <div className="feature-icon"><FaCogs /></div>
              <h3>Customizable Workflows</h3>
              <p>Tailor agent behaviors and objectives to fit your unique business needs with our intuitive, no-code workflow builder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="agents-section">
        <div className="container">
          <h2 className="section-title">Meet the Agents</h2>
          <div className="agents-grid">
            <div className="agent-card slide-in-up">
              <img src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Developer Agent" className="agent-image" />
              <div className="agent-content">
                <h3>Developer Assistant Agent</h3>
                <p>Automates code reviews, debugs complex issues, manages deployments, and even writes boilerplate code, freeing up your developers to innovate.</p>
              </div>
            </div>
            <div className="agent-card slide-in-up">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Marketing Agent" className="agent-image" />
              <div className="agent-content">
                <h3>Marketing Automation Agent</h3>
                <p>Manages ad campaigns, analyzes performance metrics, segments audiences, and personalizes customer journeys to maximize ROI.</p>
              </div>
            </div>
            <div className="agent-card slide-in-up">
              <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Data Analyst Agent" className="agent-image" />
              <div className="agent-content">
                <h3>Data Analyst Agent</h3>
                <p>Connects to your data sources, performs deep analysis, visualizes trends, and generates comprehensive reports on demand.</p>
              </div>
            </div>
             <div className="agent-card slide-in-up">
              <img src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Support Agent" className="agent-image" />
              <div className="agent-content">
                <h3>Customer Support Agent</h3>
                <p>Provides 24/7 intelligent support, resolves common issues instantly, and escalates complex queries to human agents seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;