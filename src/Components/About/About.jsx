import React from "react";
import "./About.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-image-container">
            <img
              src="/src/assets/About.png" /* Replace with your image path */
              alt="About Us"
              className="about-image"
            />
          </div>

          {/* Right Content */}
          <div className="about-content">
            <h1>About Us</h1>
            <h3>Our Story</h3>
            <p>
              CodEdge is a platform designed to empower innovation and creativity in students by
              providing top-notch internships and resources. Our goal is to bridge the gap
              between academia and industry, making students ready for future challenges.
            </p>
            <p>
              We’re here to create a thriving ecosystem of curious minds,
              changemakers, and innovators who are passionate about making a difference.
            </p>
            <Link to="http://linkedin.com/company/codedge22 " target="blank" className="cta-button">Join the Community</Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-container">
          <div className="stat-item">
            <h3>2025</h3>
            <p>Founded</p>
          </div>
          <div className="stat-item">
            <h3>2K+</h3>
            <p>Program Participants</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Events Per Year</p>
          </div>
          <div className="stat-item">
            <h3>2K+</h3>
            <p>Event Participants</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
  <h2>The Mission of CodEdge</h2>
  <div className="mission-cards">
    <div className="mission-card">
      <div className="icon-container">
        <i className="fas fa-users"></i> 
      </div>
      <h3>Community</h3>
      <p>
        Build a network of passionate developers creating impactful solutions together. Join CodEdge and connect with changemakers.
      </p>
    </div>
    <div className="mission-card">
      <div className="icon-container">
        <i className="fas fa-graduation-cap"></i> 
      </div>
      <h3>Education</h3>
      <p>
        Equip yourself with industry-relevant skills through mentorship and real-world projects. Prepare for success in the tech world.
      </p>
    </div>
    <div className="mission-card">
      <div className="icon-container">
        <i className="fas fa-lightbulb"></i> 
      </div>
      <h3> Innovation</h3>
      <p>
        Empowering interns to push technology boundaries through collaboration and continuous learning. Lead the future of innovation.
      </p>
    </div>
  </div>
</section>


    </div>
  );
};

export default About;
