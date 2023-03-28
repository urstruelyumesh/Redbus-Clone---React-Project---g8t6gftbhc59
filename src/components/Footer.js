import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;