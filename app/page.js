// paje.js

import Image from "next/image";

export const metadata = {
  title: "Sankeerth's Resume",
  description: "Professional Resume Of Sankeerth Bussa",
};

import React from "react";
import "../styles/styles.css";
import Education from "../components/Education";
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
            src="/profile.png"
            alt="Profile Photo of Sankeerth Bussa"
            className="profile-photo"
            width={120} 
            height={120} 
            unoptimized 
          />
        </section>

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <Skills />

        {/* Relevant Work Experience Section */}
        <WorkExperience />

        {/* Certifications Section */}
        <Certifications />

        {/* Academic Projects and International Publications Section */}
        <AcademicProjects />

      </main>
    </div>
  );
}
