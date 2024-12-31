import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { Link } from 'react-router-dom';
import Newsletter from "./Newsletter";

// Sample Testimonial Data

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Internship Data
  const internships = [
    {
      id: 1,
      title: 'Web-Development',
      description: 'A hands-on opportunity to learn digital marketing strategies.',
      img: '/src/assets/webD.png', // Local image for Marketing internship
      categoryImg: '/src/assets/images/marketing-category.jpg', // Local image for Marketing category
      buttonText: 'Apply Now',
    },
    {
      id: 2,
      title: 'Android-Development',
      description: 'Work with engineers on software development projects.',
      img: '/src/assets/Mobile.avif', // Local image for Tech internship
      categoryImg: '/src/assets/images/tech-category.jpg', // Local image for Tech category
      buttonText: 'Apply Now',
    },
    {
      id: 3,
      title: 'Data-Analyst',
      description: 'Gain experience in graphic design and UI/UX.',
      img: '/src/assets/Data-analyst.avif', // Local image for Design internship
      categoryImg: '/src/assets/images/design-category.jpg', // Local image for Design category
      buttonText: 'Apply Now',
    },
    {
      id: 4,
      title: 'C Programming',
      description: 'Help drive business strategies and growth.',
      img: '/src/assets/C.avif', // Local image for Business Development internship
      categoryImg: '/src/assets/images/business-category.jpg', // Local image for Business Development category
      buttonText: 'Apply Now',
    },
    {
      id: 5,
      title: 'Java-Programming',
      description: 'Write blogs, articles, and copy for our digital platforms.',
      img: '/src/assets/Java.avif', // Local image for Content Writing internship
      categoryImg: '/src/assets/images/content-category.jpg', // Local image for Content Writing category
      buttonText: 'Apply Now',
    },
    {
      id: 6,
      title: 'Python-Programming',
      description: 'Analyze data and create models for business intelligence.',
      img: '/src/assets/python.avif', // Local image for Data Science internship
      categoryImg: '/src/assets/images/data-science-category.jpg', // Local image for Data Science category
      buttonText: 'Apply Now',
    },
    {
      id: 7,
      title: 'AI & ML ',
      description: 'Assist with recruitment and HR operations.',
      img: '/src/assets/ML.png', // Local image for Human Resources internship
      categoryImg: '/src/assets/images/hr-category.jpg', // Local image for HR category
      buttonText: 'Apply Now',
    },
    {
      id: 8,
      title: 'C++',
      description: 'Gain experience in financial analysis and planning.',
      img: '/src/assets/C++.avif', // Local image for Finance internship
      categoryImg: '/src/assets/C++.avif', // Local image for Finance category
      buttonText: 'Apply Now',
    },
    {
      id: 9,
      title: 'Data-Science',
      description: 'Work with the creative team to develop branding materials.',
      img: '/src/assets/Data.avif', // Local image for Graphic Design internship
      categoryImg: '/src/assets/images/graphic-design-category.jpg', // Local image for Graphic Design category
      buttonText: 'Apply Now',
    },
  ];
  

  return (
    <>
      <Navbar />
      <div className="hero-section d-flex align-items-center justify-content-center text-center position-relative">
  <video 
    className="hero-video" 
    autoPlay 
    loop 
    muted 
    playsInline
    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1" }}
  >
    <source src="/src/assets/hero 2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="hero-content position-absolute">
  <h1 className="fw-bold">
    Empowering Students <br /> with Virtual Internships
  </h1>
  <p className="fs-4">
    Gain real-world experience <br /> and accelerate your career with CodEdge internships.
  </p>
  <div>
  <Link to="/internship" className="btn btn-primary animated-btn btn-lg mx-2">
    Explore Internship
  </Link>
  <Link to="http://linkedin.com/company/codedge22 " target="blank" className="btn btn-outline-light btn-lg mx-2">Connect Us</Link>
</div>
</div>

</div>


      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg" alt="Who We Are" className="who-we-are-img" />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">
                At <strong>CodEdge</strong>, we believe that every student deserves an opportunity to enhance their skills and gain practical experience. Our mission is to provide accessible virtual internships that empower students to excel in their careers while giving employers access to fresh talent.
              </p>
              <ul className="features-list">
                <li><i className="fas fa-graduation-cap"></i> Hands-on Internship Opportunities</li>
                <li><i className="fas fa-rocket"></i> Career Acceleration</li>
                <li><i className="fas fa-users"></i> Expert Mentorship</li>
                <li><i className="fas fa-globe"></i> 100% Virtual Programs</li>
              </ul>
              <div className="btn-container">
              <Link to="http://linkedin.com/company/codedge22 " target="blank" className="btn btn-primary animated-btn btn-lg mx-2">Join Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do">
  <div className="container">
    <div className="row align-items-center">

      {/* What we do Section */}
      <div className="col-md-6 text-center text-md-start">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          At <strong>CodEdge</strong>, we specialize in connecting talented students with impactful virtual internships in
          diverse industries. Whether you’re aiming to excel in <span className="highlight">marketing</span>, 
          <span className="highlight">technology</span>, <span className="highlight">design</span>, or any other field, 
          we offer <strong>tailored experiences</strong> that help you achieve your career goals.
        </p>
        <Link to="/About" className="btn btn-primary animated-btn btn-lg mx-2">Know More</Link>
      </div>

      {/* Right Image/Graphic */}
      <div className="col-md-6 text-center mt-4 mt-md-0">
        <img
          src="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg"
          alt="What We Do"
          className="what-we-do-img"
        />
      </div>
    </div>
  </div>
</section>

     {/* Explore Internship Section */}
     <section className="explore-internships">
  <h2>Explore Internships</h2>
  <div className="internship-cards">
    {internships.slice(0, showMore ? internships.length : 6).map((internship) => (
      <div key={internship.id} className="internship-card animate__animated animate__fadeInUp">
        <div className="internship-card-header">
          <img src={internship.img} alt={internship.title} className="internship-img" />
        </div>
        <div className="internship-card-body">
          <h3 className="internship-title">{internship.title}</h3>
          <p className="internship-description">{internship.description}</p>
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {internship.buttonText}
          </a>
        </div>
      </div>
    ))}
  </div>
  <button className="btn btn-outline-secondary see-more-btn" onClick={() => setShowMore(!showMore)}>
    {showMore ? "Show Less" : "See More"}
  </button>
</section>



<section className="testimonials">
  <h2>Our Testimonials</h2>
  <div className="testimonial-cards">
    {[
      {
        name: "Anoop Kushwaha",
        img: "/src/assets/anop 1.png",
        feedback: "CodEdge provided a fantastic platform to learn and grow as a developer.",
        rating: 4.8,
        position: "Full Stack Developer",
        github: "AnoopSingh87",
        linkedin: "anoop-kushwaha-7b7a35258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "anoopsingh.35/",
        telegram: "",
      },
      {
        name: "Jay Kumar",
        img: "/src/assets/Test 2.jpg",
        feedback: "A great environment to collaborate, innovate, and excel in my career!",
        rating: 4.7,
        position: "Web Developer",
        github: "jaykumar2526/",
        linkedin: "jay-kumar-9bbba125b/",
        instagram: "jaykumar2526/",
        telegram: "/",
      },
      {
        name: "Abhishek Kumar",
        img: "/src/assets/abhishek-r.jpg",
        feedback: "An invaluable experience that shaped my career in data analysis.",
        rating: 5.0,
        position: "Data Analyst",
        github: "/",
        linkedin: "abhishek-kumar83/",
        instagram: "/",
        telegram: "/",
      },
      {
        name: "Vedansh Srivastava",
        img: "/src/assets/test 6.jpg",
        feedback: "CodEdge equipped me with essential skills and meaningful connections.",
        rating: 4.9,
        position: "Data Analyst",
        github: "vedanshsrivastava",
        linkedin: "vedansh-shrivastava-data-analyst",
        instagram: "analyticalvisionary__/profilecard/?igsh=MW52bWhqZjQ5bDBsZg==",
        telegram: "vedanshsrivastava",
      },
    ].map((testimonial, index) => (
      <div className="testimonial-card" key={index}>
        <div className="testimonial-inner">
          {/* Front Side */}
          <div className="testimonial-front">
            <div className="img-container">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-img"
              />
            </div>
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <div className="social-icons">
              <a
                href={`https://linkedin.com/in/${testimonial.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={`https://instagram.com/${testimonial.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          {/* Back Side */}
          <div className="testimonial-back">
            <p className="feedback">"{testimonial.feedback}"</p>
            <p className="about-codeedge">
              At <strong>CodEdge</strong>, we strive to empower interns with real-world experience
              and career-defining skills.
            </p>
            <div className="social-icons">
              <a
                href={`https://github.com/${testimonial.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={`https://linkedin.com/in/${testimonial.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={`https://instagram.com/${testimonial.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={`https://t.me/${testimonial.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      



      {/* Newsletter Section */}
      <Newsletter/>

      {/* Footer Section */}
    
    </>
  );
};

export default Hero;
