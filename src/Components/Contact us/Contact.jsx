import React from 'react';
import './Contact.css'; // Import the CSS

const Contact = () => {
    return (
        <section className='contactBody'>
            {/* Contact Hero Section */}
            <div className="contact-hero">
                <div className="contact-hero-overlay">
                    <div className="container">
                        <h2>Get in Touch</h2>
                        <p>
                            We're here to help and answer any questions you might have. Whether you want to collaborate, inquire about our services, or just say hello, feel free to drop us a message. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info and Form Section */}
            <div className="container">
                <div className="row">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Visit Us</h4>
                                <p>
                                    Sector-60, Noida<br />
                                    Uttar Pradesh, India, 201301
                                </p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Call Us</h4>
                                <p>+91 8882618218</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Email Us</h4>
                                <p>info.codedge@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form action="" id="contact-form">
                            <h2>We'd Love to Hear From You</h2>
                            <p>
                                Got a question, feedback, or just want to chat? Fill out the form below and we’ll get back to you as soon as possible.
                            </p>
                            <div className="input-box">
                                <input type="text" required name="fullName" />
                                <span>Full Name</span>
                            </div>
                            <div className="input-box">
                                <input type="email" required name="email" />
                                <span>E-mail Address</span>
                            </div>
                            <div className="input-box">
                                <textarea required name="message"></textarea>
                                <span>Your Message</span>
                            </div>
                            <div className="input-box">
                                <input type="submit" value="Send Message" name="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
