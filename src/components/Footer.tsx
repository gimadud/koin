// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <img
          className="footer-logo"
          src="https://static.koreatech.in/assets/img/logo_white.png"
          alt="KOIN logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
