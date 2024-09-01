"use client"; // Mark this as a client component

import React, { useState } from "react";
import "../styles/styles.css"; // Import the CSS file

export default function WorkExperience() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section">
      <h2 className="section-title" onClick={toggleAccordion}>
        Relevant Work Experience
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span>
      </h2>

      {isOpen && (
        <div className="accordion-content">
          {/* Job 1: Engineer II, Cloud Solutions */}
          <div className="job">
            <p className="job-title">
              Engineer II, Cloud Solutions (AWS), Invesco, Hyderabad, India
            </p>
            <p className="job-duration">Jul 2022 – Present</p>
            <ul className="list">
              <li className="list-item">
                <span className="list-icon">🚀</span> Designed reusable
                Terraform modules adhering to organization standards; automated
                deployments via Bitbucket Pipelines, saving nearly{" "}
                <strong>60%</strong> in provisioning time and achieving{" "}
                <strong>100% compliance</strong> with tags and naming standards.
              </li>
              <li className="list-item">
                <span className="list-icon">🔧</span> Acted as Cloud
                Administrator with strong Linux System Administration skills,
                leading to swift issue resolution.
              </li>
              <li className="list-item">
                <span className="list-icon">⏱️</span> Streamlined EC2 instances
                patching for Windows/RHEL, reducing time by <strong>85%</strong>{" "}
                and failures by <strong>40%</strong> for AWS multi-account
                environments.
              </li>
              <li className="list-item">
                <span className="list-icon">🛠️</span> Created Ansible playbooks
                for pre/post patching validation, with results ingested into
                Splunk for monitoring.
              </li>
              <li className="list-item">
                <span className="list-icon">🌐</span> Focused on provisioning
                AWS Infrastructure as Code (IaC) through Terraform CI/CD
                pipelines in a cloud-based environment.
              </li>
              <li className="list-item">
                <span className="list-icon">🔍</span> Supported the
                infrastructure for 1200+ microservices and serverless
                applications on AWS, designed to maintain fault tolerance across
                regions while providing essential financial services to a
                diverse user base.
              </li>
              <li className="list-item">
                <span className="list-icon">📦</span> Provisioned and maintained
                over 50 EKS clusters running isolated namespaces for
                applications using Terraform.
              </li>
              <li className="list-item">
                <span className="list-icon">⚙️</span> Leveraged Python
                automation for operational streamlining, resulting in nearly{" "}
                <strong>100% time savings</strong> on manual processes.
              </li>
              <li className="list-item">
                <span className="list-icon">🤝</span> Collaborated with
                infrastructure teams on Network, Linux, Windows, Threat
                management, and Cyber Security.
              </li>
              <li className="list-item">
                <span className="list-icon">🔒</span> Utilized the Wiz security
                tool to analyze and mitigate risks in the Cloud environment.
              </li>
              <li className="list-item">
                <span className="list-icon">⌛</span> Developed automation to
                log in to AWS accounts, saving 1 hour of engineer time every
                day.
              </li>
              <li className="list-item">
                <span className="list-icon">📊</span> Automated the creation of
                Change Requests using the ServiceNow REST API with Python.
              </li>
              <li className="list-item">
                <span className="list-icon">💻</span> Served as Backend
                Developer in a Python project building a full-stack application
                on the ServiceNow CMDB; developed an intuitive web UI atop the
                configuration management database to enhance user experience.
              </li>
              <li className="list-item">
                <span className="list-icon">🔍</span> Created a Streamlit web UI
                in Python to simplify SailPoint IAM certification report
                generation, reducing time and complexity.
              </li>
              <li className="list-item">
                <span className="list-icon">📈</span> Wrote Ansible automation
                to collect custom logs and facts for monitoring Teams Rooms
                devices, enabling oversight in Splunk.
              </li>
              <li className="list-item">
                <span className="list-icon">🏆</span> Won a cloud hackathon by
                building a Python CLI toolkit wrapper that streamlined and
                improved AWS operations.
              </li>
            </ul>
          </div>

          {/* Additional Job Entries */}
          {/* Add more job entries in the same format if needed */}
        </div>
      )}
    </section>
  );
}
