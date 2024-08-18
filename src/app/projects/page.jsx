import React from 'react';

const Projects = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/TripleTrans.png" alt="portfolio" />
                </div>
                <div className="portfolio-info font-semibold">
                  <h4 style={{color:'#2196F3'}}>Company Website</h4>
                  <p>Developed and maintained the backend infrastructure using Node.js and Express.js with MVC architecture. Implemented Role-Based Access Control (RBAC) with MongoDB to enhance security and operational efficiency. Collaborated with a team to deliver a secure and scalable platform.</p>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/DigitalMess.png" alt="portfolio" />
                </div>
                <div className="portfolio-info font-semibold">
                  <h4 style={{color:'#2196F3'}}>Academic Project: Digital Mess</h4>
                  <p>Led the development of a full-stack web application using the MERN stack. The project focused on efficient meal planning for students, integrating features like calendar-based booking, QR code access, and improved record-keeping.</p>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/CognifAI.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Company Webisite</h4>
                  
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/E-Commerce.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Banner Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/DropEase.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Wordpress</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/CovidTrackerApp.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Web Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
