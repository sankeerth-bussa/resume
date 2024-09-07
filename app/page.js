// app/page.js

import Image from "next/image";

export const metadata = {
  title: "Sankeerth's Resume",
  description: "Professional Resume Of Sankeerth Bussa",
};

import React from "react";
import "../styles/styles.css";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import AcademicProjects from "../components/AcademicProjects";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <div className="container">
      <main>
        <section className="header">
          <div className="header-content">
            <h1 className="name">Sankeerth Bussa</h1>
            <div className="contact">
              Hyderabad, India | Phone: +91-955-337-0711
            </div>
            <div>
              {/* Email and LinkedIn as Buttons */}
              <a href="mailto:sankeerthbussa@gmail.com" className="link-button">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/sankeerthbussa"
                className="link-button"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* Profile Photo */}

          <Image
            src={`${process.env.NODE_ENV === "production" ? "/resume" : ""}/profile.png`} // Adjust path according to the base path
            alt="Profile Photo of Sankeerth Bussa"
            className="profile-photo"
            width={120} // Specify width of the image
            height={120} // Specify height of the image
            unoptimized // Disable image optimization for static deployment
          />
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-details">
            <img
              src="/education-icon.png"
              alt="Education Icon"
              className="education-icon"
            />
            <p className="text">
              <strong>
                Sreenidhi Institute of Science and Technology, Hyderabad,
                Telangana, India
              </strong>
              <br />
              B. Tech, Electronics & Computer Engineering (GPA: 8.53), Aug 2018
              - June 2022
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <Skills />

        {/* Relevant Work Experience Section */}
        <WorkExperience />

        {/* Academic Projects and International Publications Section */}
        <AcademicProjects />

        {/* Certifications Section */}
        <Certifications />
      </main>
    </div>
  );
}
