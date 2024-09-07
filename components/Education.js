"use client"; // Mark this as a client component

import React from "react";
import Image from "next/image";
import styles from "../styles/Education.module.css"; // Import the CSS module

export default function Education() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.educationDetails}>
        <Image
          src="/education-icon.png"
          alt="Education Icon"
          className={styles.educationIcon}
          width={60} // Adjusted width to match CSS
          height={60} // Adjusted height to match CSS
          unoptimized
        />
        <p className={styles.text}>
          <strong>
            Sreenidhi Institute of Science and Technology, Hyderabad, Telangana,
            India
          </strong>
          B. Tech, Electronics & Computer Engineering (GPA: 8.53), Aug 2018 -
          June 2022
        </p>
      </div>
    </section>
  );
}
