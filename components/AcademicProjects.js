"use client"; // Mark this as a client component

import React, { useState } from "react";
import "../styles/styles.css"; // Import the CSS file

export default function AcademicProjects() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section">
      <h2 className="section-title" onClick={toggleAccordion}>
        Academic Projects and International Publications
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span>
      </h2>

      {isOpen && (
        <div className="accordion-content">
          <ul className="list">
            <li className="list-item">
              <span className="list-icon">📘</span>
              <strong>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/9702299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploying Hadoop Architecture Using Ansible and Terraform
                </a>
              </strong>
              , Published in 2021 5th International Conference on Information
              Systems and Computer Networks (ISCON), Publisher: IEEE, Dec 22-23,
              2021, Mathura, India.
            </li>
            <li className="list-item">
              <span className="list-icon">📗</span>
              <strong>
                <a
                  href="https://iopscience.iop.org/article/10.1088/1742-6596/2327/1/012027/meta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accelerating the Machine Learning Model Deployment Using MLOps
                </a>
              </strong>
              , Journal of Physics: Conference Series, Volume 2327, 4th
              International Conference on Intelligent Circuits and Systems, Apr
              7-9, 2022, Online.
            </li>
            <li className="list-item">
              <span className="list-icon">📙</span>
              <strong>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S1877050922020968"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automated Pipeline for the Deployment Using OpenShift
                </a>
              </strong>
              , Procedia Computer Science, Volume 215, 2022, Pages 220-229.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
