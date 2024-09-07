"use client"; // Mark this as a client component

import React from "react";
import styles from "../styles/WorkExperience.module.css"; // Import the new CSS module

export default function WorkExperience() {
  return (
    <section className={styles["job-section"]}>
      <h2 className={styles["job-title"]}>Work Experience</h2>

      <div className={styles["job-container"]}>
        {/* Job 1: Engineer II, Cloud Solutions */}
        <div className={styles.job}>
          <p className={styles.jobTitle}>
            Engineer II, Cloud Solutions (AWS), Invesco, Hyderabad, India
          </p>
          <p className={styles.jobDuration}>Jul 2022 – Present</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>🚀</span> Designed and automated
              AWS infrastructure using reusable Terraform modules and Bitbucket
              Pipelines, achieving nearly <strong>60%</strong> reduction in
              provisioning time and <strong>100% compliance</strong> with
              organizational standards.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🔧</span> Acted as Cloud Administrator
              with expertise in Linux System Administration and EC2 patching for
              Windows/RHEL, reducing patching time by <strong>85%</strong> and
              failures by <strong>40%</strong>.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🛠️</span> Created and maintained
              Ansible playbooks for patching validation and monitoring,
              integrating results into Splunk for oversight and proactive
              management.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🌐</span> Provisioned and managed AWS
              infrastructure as code (IaC) using Terraform, supporting 1200+
              microservices and serverless applications, and maintaining over 50
              EKS clusters with isolated namespaces.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">⚙️</span> Developed Python automation
              scripts and tools, saving <strong>100% of time</strong> on manual
              processes, including AWS account login automation and ServiceNow
              API integrations.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🤝</span> Collaborated with teams
              across Networking, Cyber Security, and Systems Administration
              (Linux/Windows) to optimize cloud infrastructure and ensure
              security compliance.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🔒</span> Utilized Wiz security tools
              for cloud risk analysis and mitigation.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">💻</span> Developed backend solutions
              in Python, including full-stack applications for the ServiceNow
              CMDB and a Streamlit web UI for SailPoint IAM certification,
              enhancing user experience and operational efficiency.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">📈</span> Wrote Ansible automation for
              custom log and fact collection to monitor Teams Rooms devices,
              enabling comprehensive oversight in Splunk.
            </li>
            <li className={styles.listItem}>
              <span className="listIcon">🏆</span> Won a cloud hackathon by
              building a Python CLI toolkit to streamline AWS operations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
