"use client"; // Mark this as a client component

import React from "react";
import styles from "../styles/Publications.module.css"; // Import the CSS module

export default function Publications() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Academic Projects and International Publications</h2>

      <div className={styles.accordionContent}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img
              src="/icons/publication.png" /* Path to your custom icon */
              alt="Book Icon"
              className={styles.listIcon}
            />
            <div>
              <span className={styles.publicationTitle}>Deploying Hadoop Architecture Using Ansible and Terraform</span>
              <div className={styles.publicationDescription}>
                Published in 2021 5th International Conference on Information Systems and Computer Networks (ISCON), Publisher: IEEE, Dec 22-23, 2021, Mathura, India.
              </div>
            </div>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/publication.png"
              alt="Book Icon"
              className={styles.listIcon}
            />
            <div>
              <span className={styles.publicationTitle}>Accelerating the Machine Learning Model Deployment Using MLOps</span>
              <div className={styles.publicationDescription}>
                Journal of Physics: Conference Series, Volume 2327, 4th International Conference on Intelligent Circuits and Systems, Apr 7-9, 2022, Online.
              </div>
            </div>
          </li>
          <li className={styles.listItem}>
            <img
              src="/icons/publication.png"
              alt="Book Icon"
              className={styles.listIcon}
            />
            <div>
              <span className={styles.publicationTitle}>Automated Pipeline for the Deployment Using OpenShift</span>
              <div className={styles.publicationDescription}>
                Procedia Computer Science, Volume 215, 2022, Pages 220-229.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
