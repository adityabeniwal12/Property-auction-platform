import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="call-to-action">
        <h2>Get started on your journey today</h2>
        <p>
          If you need expert guidance from people who are looking out for you —
          we’re your people. And we’re ready to walk that journey with you.
        </p>
        <Link to="/contact" className="cta-button">
          BOOK A DISCOVERY SESSION →
        </Link>
      </section>
      <footer className="footer">
        <div className="footer-left">ADI PROPERTY</div>
        <div className="footer-center">© ADI PROPERTY</div>
        <div className="footer-right">
          <a href="https://instagram.com" target="_blank">Instagram</a> |
          <a href="https://facebook.com" target="_blank"> Facebook</a> |
          <a href="https://twitter.com" target="_blank"> Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;