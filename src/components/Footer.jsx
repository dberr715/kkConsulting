import React, { useState } from "react";

const Footer = () => {
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setShowCopyAlert(true);
      setTimeout(() => {
        setShowCopyAlert(false);
      }, 1000); // Disappears after 1 second
    });
  };

  return (
    <footer className="footer">
      <p
        onClick={() => copyToClipboard("contact@kkconsulting.com")}
        style={{ cursor: "pointer" }}
      >
        contact@kkconsulting.com
        {showCopyAlert && (
          <span className="clipboard-alert">Copied to clipboard!</span>
        )}
      </p>
      <p>
        <a
          href="tel:+18649095960"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          864-909-5960
        </a>
      </p>
    </footer>
  );
};

export default Footer;
