"use client"; // This is a client component

import React from "react";
import "../styles/styles.css"; // Ensure you have the right path to your CSS file

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {/* DevOps Skills */}
        <div className="skill-card">
          <img
            src="/devops-icon.png"
            alt="DevOps Icon"
            className="skill-icon"
          />
          <span className="skill-badge">DevOps</span>
          <div className="skill-progress">
            <div className="skill-progress-bar" style={{ width: "90%" }}></div>
          </div>
          <ul className="skill-list">
            <li>Ansible</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>OpenShift</li>
            <li>Podman</li>
          </ul>
        </div>

        {/* Cloud & Security Skills */}
        <div className="skill-card">
          <img
            src="/cloud-icon.png"
            alt="Cloud & Security Icon"
            className="skill-icon"
          />
          <span className="skill-badge">Cloud & Security</span>
          <div className="skill-progress">
            <div className="skill-progress-bar" style={{ width: "90%" }}></div>
          </div>
          <ul className="skill-list">
            <li>AWS</li>
            <li>Terraform</li>
            <li>Wiz</li>
            <li>Splunk</li>
          </ul>
        </div>

        {/* Tools Skills */}
        <div className="skill-card">
          <img src="/tools-icon.png" alt="Tools Icon" className="skill-icon" />
          <span className="skill-badge">Tools</span>
          <div className="skill-progress">
            <div className="skill-progress-bar" style={{ width: "80%" }}></div>
          </div>
          <ul className="skill-list">
            <li>Confluence</li>
            <li>Jira</li>
            <li>Bitbucket</li>
            <li>Git</li>
            <li>Linux</li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="skill-card">
          <img
            src="/languages-icon.png"
            alt="Languages Icon"
            className="skill-icon"
          />
          <span className="skill-badge">Languages</span>
          <div className="skill-progress">
            <div className="skill-progress-bar" style={{ width: "95%" }}></div>
          </div>
          <ul className="skill-list">
            <li>Python</li>
            <li>Shell Scripting</li>
            <li>JavaScript</li>
            <li>FastAPI</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
