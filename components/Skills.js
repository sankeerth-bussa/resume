"use client"; // This is a client component

import React from "react";
import Image from "next/image";
import "../styles/styles.css"; // Ensure you have the right path to your CSS file

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {/* DevOps Skills */}
        <div className="skill-card">
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/resume" : ""}/devops-icon.png`}
            alt="DevOps Icon"
            className="skill-icon"
            width={120}
            height={120}
            unoptimized
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
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/resume" : ""}/cloud-icon.png`}
            alt="Cloud & Security Icon"
            className="skill-icon"
            width={120}
            height={120}
            unoptimized
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
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/resume" : ""}/tools-icon.png`}
            alt="Tools Icon"
            className="skill-icon"
            width={120}
            height={120}
            unoptimized
          />
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
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/resume" : ""}/languages-icon.png`}
            alt="Languages Icon"
            className="skill-icon"
            width={120}
            height={120}
            unoptimized
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