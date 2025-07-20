import React, { useState } from "react";
import "../index.css";

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Auction Of Properties Made Simple</h1>
            <p>Get quick bids and connect with property experts instantly.</p>
          </div>

          {!submitted ? (
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="4"></textarea>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h3>Thank you!</h3>
              <p>We’ve received your message. We’ll get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;