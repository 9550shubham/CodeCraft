import React from 'react';
import Image from 'next/image';

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
                  <Image
                    src="/imgs/projects/TripleTrans.png"
                    alt="portfolio"
                    width={270}
                    height={224} 
                    className="portfolio-img" 
                  />
                </div>
                <div className="portfolio-info font-semibold">
                  <h4 style={{color:'#2196F3'}}>Company Website</h4>
                  <div className="icon">
                    <a href="http://ttms.live/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Decentralizing the entire company that transports goods along with the truck drivers and minimizing the manual work of the sheets by automating them all on a single platform.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Full Stack Developer at DTL</p>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image
                    src="/imgs/projects/DigitalMess.png"
                    alt="portfolio"
                    width={270}
                    height={224}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info font-semibold">
                  <h4 style={{color:'#2196F3'}}>Academic Project: Digital Mess</h4>
                  <div className="icon">
                    <a href="https://digital-mess-client.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Led the development of a full-stack web application using the MERN stack. The project focused on efficient meal planning for students, integrating features like calendar-based booking, QR code access, and improved record-keeping.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Leader of Academic Project</p>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image
                    src="/imgs/projects/CognifAI.png"
                    alt="portfolio"
                    width={270}
                    height={224}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Company Webisite</h4>
                  <div className="icon">
                    <a href="https://www.cognifai.io/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Bridging the gap between psychologists and patients, reducing their workload by integrating a friendly chatbot. Built a web app using React.js and took an intiative for Mobile app with Flutter. Conducted TestNG testing, reducing bugs by 30%.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Software Engineer Intern at CognifAI</p>
            </div>
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image
                    src="/imgs/projects/E-Commerce.jpg"
                    alt="portfolio"
                    width={270}
                    height={224}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Flutter app with Node.js</h4>
                  <div className="icon">
                    <a href="https://github.com/9550shubham/E_Commerce_App" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Developed a dynamic e-commerce platform with user authentication, daily deals, product ratings, and seller management. Enhanced user engagement and streamlined admin operations with advanced analytics features.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Individual Project</p>
            </div>
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image
                    src="/imgs/projects/DropEase.jpg"
                    alt="portfolio"
                    width={270}
                    height={224}
                    className="portfolio-img" 
                  />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>Campus Food Delivery App</h4>
                  <div className="icon">
                    <a href="https://github.com/9550shubham/DropEase-FoodDeliveryApp" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Designed a Flutter-based food delivery app for campus use, featuring Firebase login authentication. The app addresses the gap where mainstream delivery services don{String.fromCharCode(39)}t operate, ensuring timely food delivery within the campus.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Group Project</p>
            </div>
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <Image
                    src="/imgs/projects/CovidTrackerApp.png"
                    alt="portfolio"
                    width={270}
                    height={224}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info">
                  <h4 style={{color:'#2196F3'}}>COVID-19 Tracker App</h4>
                  <div className="icon">
                    <a href="https://github.com/9550shubham/COVID-19-Tracker-App" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <p className='px-3'>Developed a COVID-19 tracker app that monitors global and country-specific cases, including total deaths, recoveries, and active cases. Integrated APIs to fetch real-time data on daily deaths, recoveries, and ongoing cases.</p>
              <p className='px-3 underline' style={{ color: '#939292' }}>Individual Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
