'use client';
import React, { useState } from "react";
import JourneyCard from "./journeyCard";

const About = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I'm Shubham an <span>Engineer</span>
                  </h2>
                  <p>
                  I am very passionate and dedicated to my work. I am a Versatile Full Stack Developer with expertise in the MERN stack and Next.js. Skilled in creating scalable, user-focused web applications with strong performance. Experienced in agile environments and passionate about building impactful digital solutions. Well-suited for roles like Full Stack Developer or Software Engineer.</p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Pursuing Degree : <span>Bachelor of Engineering</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        From : <span>Thapar Institute of Engineering & Technology</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Hometown City : <span>Panipat, Haryana</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span><a href="tel:+918295154359">+91 8295154359</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                    <p>
                      Email : <span><a href="mailto:shubhamgandhi1002@gmail.com">shubhamgandhi1002@gmail.com</a></span>
                    </p>
                  </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/Shubham_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a href="/contact" data-section-index={0} className="btn hire-me">
                        Hire Me
                      </a>
                    </div>
                  </div>
                  <p style={{paddingTop:60, paddingBottom:10, paddingLeft:0, paddingRight:20}}>Explore my skills and the journey behind them, starting from an extracurricular activity (ELC) that sparked my passion, leading me to become a software developer through continuous learning and hands-on projects.</p>

                </div>
                <div className="skills padd-15">
                <h3 className="title">Skills</h3>
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Data Structures and Algorithms</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MERN Stack</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React Framework: Next.JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Test Automation: TestNG & Selenium </h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>App Development: Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>HTML, CSS, Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-carousel-container w-full max-w-4xl mx-auto px-4">
                  <h3 className="title text-center mb-6">My Journey</h3>
                  <JourneyCard />
                </div>
              </div>
              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Journey of Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Full Stack Developer Interned</h4>
                          <p className="timeline-text underline">
                            <i>Developreneurs Tech Ltd.</i>
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April'24 to August'24
                          </h6>
                          <p className="timeline-text">
                          Developed a secure trucking website for a Canadian startup, enhancing operational efficiency by 25%. Designed a company portfolio to showcase achievements, and actively contributed to agile processes, ensuring timely project delivery.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Full Stack Developer Interned</h4>
                          <p className="timeline-text underline">
                            <i>Developreneurs Tech Ltd.</i>
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April'24 to August'24
                          </h6>
                          <p className="timeline-text">
                          Developed a secure trucking website for a Canadian startup, enhancing operational efficiency by 25%. Designed a company portfolio to showcase achievements, and actively contributed to agile processes, ensuring timely project delivery.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Full Stack Developer Interned</h4>
                          <p className="timeline-text underline">
                            <i>Developreneurs Tech Ltd.</i>
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April'24 to August'24
                          </h6>
                          <p className="timeline-text">
                          Developed a secure trucking website for a Canadian startup, enhancing operational efficiency by 25%. Designed a company portfolio to showcase achievements, and actively contributed to agile processes, ensuring timely project delivery.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Full Stack Developer Interned</h4>
                          <p className="timeline-text underline">
                            <i>ELC activity</i>
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April'24 to August'24
                          </h6>
                          <p className="timeline-text">
                          Developed a secure trucking website for a Canadian startup, enhancing operational efficiency by 25%. Designed a company portfolio to showcase achievements, and actively contributed to agile processes, ensuring timely project delivery.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Bachelor's in Engineering</h4>
                          <p className="timeline-text underline">
                          Thapar Institute of Engineering & Technology
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August'21 to July'25
                          </h6>
                          <p className="timeline-text">
                          CGPA: 8.07/10
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Bachelor's in Engineering</h4>
                          <p className="timeline-text underline">
                          Thapar Institute of Engineering & Technology
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August'21 to July'25
                          </h6>
                          <p className="timeline-text">
                          CGPA: 8.07/10
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h4 className="timeline-title">Bachelor's in Engineering</h4>
                          <p className="timeline-text underline">
                          Thapar Institute of Engineering & Technology
                          </p>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August'21 to July'25
                          </h6>
                          <p className="timeline-text">
                          CGPA: 8.07/10
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
