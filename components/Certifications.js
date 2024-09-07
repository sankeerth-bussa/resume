"use client"; // Mark this as a client component

import React from "react";
import styles from "../styles/Certifications.module.css"; // Import the CSS module

export default function Certifications() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Certifications</h2>

      <div className={styles.accordionContent}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img
              src="/icons/redhat.svg" /* Path to your custom icon */
              alt="Certificate Icon"
              className={styles.listIcon}
            />
            <a
              href="https://rhtapps.redhat.com/verify?certId=210-213-088"
              target="_blank"
              rel="noopener noreferrer"
            >
              Red Hat Certified System Administrator, Aug 2022
            </a>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/redhat.svg"
              alt="Certificate Icon"
              className={styles.listIcon}
            />
            <a
              href="https://rhtapps.redhat.com/verify?certId=210-213-088"
              target="_blank"
              rel="noopener noreferrer"
            >
              Red Hat Certified Engineer (Ansible), Dec 2022
            </a>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/redhat.svg"
              alt="Certificate Icon"
              className={styles.listIcon}
            />
            <a
              href="https://rhtapps.redhat.com/verify?certId=210-213-088"
              target="_blank"
              rel="noopener noreferrer"
            >
              Red Hat Certified Specialist in Containers and Kubernetes, Mar
              2022
            </a>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/terraform.svg"
              alt="Certificate Icon"
              className={styles.listIcon}
            />
            <a
              href="https://www.credly.com/badges/2e5d46d3-7a65-4687-98af-b8a2c7d102bb/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              HashiCorp Certified: Terraform Associate (003), Feb 2024
            </a>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/aws.svg"
              alt="Certificate Icon"
              className={styles.listIcon}
            />
            <a
              href="https://www.credly.com/badges/3d488884-293c-4678-90f0-69722e26ea6f/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Certified SysOps Administrator – Associate, Apr 2024
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
