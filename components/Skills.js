import React from "react";
import Image from "next/image";
import styles from "../styles/Skills.module.css";

const skillsData = [
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "Terraform", icon: "/icons/terraform.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Linux", icon: "/icons/redhat.svg" },
  { name: "Ansible", icon: "/icons/ansible.svg" },
  { name: "Bitbucket", icon: "/icons/bitbucket.svg" },
  { name: "OpenShift", icon: "/icons/openshift.svg" },
  { name: "Podman", icon: "/icons/podman.svg" },
  { name: "Confluence", icon: "/icons/confluence.svg" },
  { name: "Jira", icon: "/icons/jira.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Wiz", icon: "/icons/wiz.svg" },
  { name: "Splunk", icon: "/icons/splunk.svg" },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Technical Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
