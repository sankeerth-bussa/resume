"use client"; // Mark this as a client component

import React, { useState } from "react";
import "../styles/styles.css"; // Import the CSS file

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(true); // State to track if the section is open or closed

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the state between open and closed
  };

  return (
    <section className="section">
      <h2 className="section-title" onClick={toggleAccordion}>
        Certifications
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span> {/* Rotate arrow indicator */}
      </h2>

      {isOpen && ( // Only render this section when isOpen is true
        <div className="accordion-content">
          <ul className="list">
            <li className="list-item">
              <span className="list-icon">🎓</span>
              <a href="https://rhtapps.redhat.com/verify?certId=210-213-088" target="_blank" rel="noopener noreferrer">
                Red Hat Certified System Administrator, Aug 2022
              </a>
            </li>
            <li className="list-item">
              <span className="list-icon">🎓</span>
              <a href="https://rhtapps.redhat.com/verify?certId=210-213-088" target="_blank" rel="noopener noreferrer">
                Red Hat Certified Engineer (Ansible), Dec 2022
              </a>
            </li>
            <li className="list-item">
              <span className="list-icon">🎓</span>
              <a href="https://rhtapps.redhat.com/verify?certId=210-213-088" target="_blank" rel="noopener noreferrer">
                Red Hat Certified Specialist in Containers and Kubernetes, Mar 2022
              </a>
            </li>
            <li className="list-item">
              <span className="list-icon">🎓</span>
              <a href="https://www.credly.com/badges/2e5d46d3-7a65-4687-98af-b8a2c7d102bb/public_url" target="_blank" rel="noopener noreferrer">
                HashiCorp Certified: Terraform Associate (003), Feb 2024
              </a>
            </li>
            <li className="list-item">
              <span className="list-icon">🎓</span>
              <a href="https://www.credly.com/badges/3d488884-293c-4678-90f0-69722e26ea6f/public_url" target="_blank" rel="noopener noreferrer">
                AWS Certified SysOps Administrator – Associate, Apr 2024
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
