import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show popup message
    setPopupMessage("Subscription successful! 🎉");
    
    // Clear the email input
    setEmail("");

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter and get the latest internship opportunities and career advice directly in your inbox.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>

      {/* Success popup message */}
      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
    </section>
  );
};

export default Newsletter;
