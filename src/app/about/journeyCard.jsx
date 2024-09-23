// import React, { useState, useEffect } from 'react';
// import './journeyCard.css';

// const JourneyCard = () => {
//   const cards = [
//     {
//       id: 1,
//       title: 'Getting Started with Flutter',
//       company: 'ELC',
//       date: 'July\'22',
//       content: 'Designed and delivered a company portfolio project.',
//       type: 'gradient'
//     },
//     {
//       id: 2,
//       title: 'Full Stack Developer Intern',
//       company: 'Developreneurs Tech Ltd.',
//       date: 'April\'24 to August\'24',
//       content: 'Actively contributed to agile processes and project delivery.',
//       type: 'gradient'
//     },
//     {
//       id: 3,
//       title: 'Full Stack Developer Intern',
//       company: 'Developreneurs Tech Ltd.',
//       date: 'April\'24 to August\'24',
//       content: 'Contributed to the development of the company portfolio.',
//       type: 'gradient'
//     },
//     {
//       id: 4,
//       title: 'ELC Activity',
//       company: 'ELC Activity',
//       date: 'July\'22',
//       content: 'Led the development of a Flutter project within a week.',
//       type: 'gradient'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-swipe every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextCard();
//     }, 4500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   // Next and Previous card handlers
//   const prevCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
//   };

//   const nextCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Swipe functionality for mobile screens
//   let touchStartX = 0;
//   let touchEndX = 0;

//   const handleTouchStart = (e) => {
//     touchStartX = e.changedTouches[0].screenX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     if (touchStartX - touchEndX > 50) {
//       nextCard(); // Swipe left for next card
//     }
//     if (touchEndX - touchStartX > 50) {
//       prevCard(); // Swipe right for previous card
//     }
//   };

//   return (
//     <>
//       <button className="carousel-arrow left-arrow" onClick={prevCard}>&lt;</button>
//       <div className="carousel-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
//         <div className="cards-wrapper">
//           <div className={`card large-card ${cards[currentIndex].type}-card`}>
//             <div className="punched-circle">{cards[currentIndex].id}</div>
//             <h4 className="timeline-title" style={{marginLeft:30,marginTop:-10}}>{cards[currentIndex].title}</h4>
//             <p className="timeline-text underline">
//               <i>{cards[currentIndex].company}</i>
//             </p>
//             <h6 className="timeline-date">
//               <i className="fa fa-calendar" /> {cards[currentIndex].date}
//             </h6>
//             <p className="timeline-text">{cards[currentIndex].content}</p>
//           </div>
//         </div>
//       </div>
//       <button className="carousel-arrow right-arrow" onClick={nextCard}>&gt;</button>
//     </>
//   );
// };

// export default JourneyCard;

import React, { useState, useEffect } from 'react';
import './journeyCard.css';

const JourneyCard = () => {
  const cards = [
    {
      id: 1,
      title: 'Getting Started with Flutter',
      company: 'ELC Activity',
      date: 'Jul\'22',
      content: 'During an ELC activity, Me and my peers had to quickly learn Flutter and build a project in just a week. While many peers moved on, And I found myself really enjoying it, kept building projects, and continued honing my skills.',
      type: 'gradient'
    },
    {
      "id": 2,
      "title": "Exploring API's Development",
      "company": "Self-Study",
      "date": "Jan\'23",
      "content": "After gaining experience with Flutter by developing small projects, I realized it only handles the UI. Curious about backend and APIs, I researched how APIs work, understood their importance, and explored Firebase as a backend solution.",
      "type": "gradient"
    },
    {
      id: 3,
      title: "Building My First API-Powered App",
      company: "Personal Project",
      date: "May\'23",
      content: "I built a COVID-19 tracker app using a publicly available API that updated daily. This sparked my curiosity about how APIs are made, leading me to dive deeper into backend development and choose Node.js as my learning path.",
      type: "gradient"
    },
    {
      "id": 4,
      "title": "Achieving My First Milestone",
      "company": "Personal Project",
      "date": "Jul\'23",
      "content": "I learned Node.js through documentation and tutorials, then developed an E-commerce app with added features like product analytics. This was a key milestone in my journey, as I had built a full-fledged app ready for publication on the Play Store.",
      "type": "gradient"
    },
    {
      "id": 5,
      "title": "Landing My First Internship",
      "company": "CognifAi Startup",
      "date": "Aug\'23",
      "content": "After gaining key experience with Flutter and Node.js, I wanted to apply my skills at an industry level. I began searching for internships and successfully secured my first opportunity at CognifAi, a startup, marking my entry into the professional world.",
      "type": "gradient"
    },
    {
      "id": 6,
      "title": "Expanding into React.js",
      "company": "CognifAi Health Pvt. Ltd.",
      "date": "Aug\'23 - Jan\'24 (6 months Intern)",
      "content": "I led the development of a Flutter app alongside the company’s React.js website, introducing new ideas along the way, sparking my curiosity to learn React.js hands-on. I was part of CognifAi’s transition from a startup to a full-fledged company.",
      "type": "gradient"
    },
    {
      "id": 7,
      "title": "Building and Deploying Digital Mess Project",
      "company": "Academic Project",
      "date": "Mar\'24",
      "content": "After gaining industry experience with React, I created a self-project, Digital Mess, as part of my academic course. It’s a full MERN stack project aimed at reducing mess fees and food wastage, which I successfully deployed on Vercel.",
      "type": "gradient"
    },
    {
      "id": 8,
      "title": "Remote Internship in Canada",
      "company": "Developreneurs Tech Ltd.",
      "date": "May\'24 - Aug\'24",
      "content": "Developreneurs Tech Ltd., a Canadian company, reached out to me on LinkedIn for backend work on their product’s website. Later, I handled their company portfolio. This boosted my agile skills and experience working across time zones.",
      "type": "gradient"
    },    
    {
      "id": 9,
      "title": "Diving into Blockchain and Cracking TSOC",
      "company": "TSOC (Timechain Summer of Code)",
      "date": "Summer\'24",
      "content": "Looking to expand beyond the MERN stack, I explored blockchain and cracked TSOC, an open-source contributor and mentorship program. Last summer, I gained valuable hands-on experience in this emerging field.",
      "type": "gradient"
    },
    {
      "id": 10,
      "title": "Full Stack Summer Internship",
      "company": "Xebia IT Architects Pvt. Ltd.",
      "date": "Summer\'24",
      "content": "I worked on a banking page with a large team which was a great experience. My tasks included managing APIs, frontend-backend integration, and authentication using Twilio. Sparked my interest in Docker, AWS. So this was my next target to learn.",
      "type": "gradient"
    },
    {
      "id": 11,
      "title": "Grasping Next.js and AWS",
      "company": "CodeCraft Portfolio",
      "date": "Aug\'24",
      "content": "With the rapid evolution in full stack development, I discovered Next.js this year. Excited to create my own website, I built my personal portfolio, CodeCraft, using Next.js and deployed it on AWS, furthering my knowledge of cloud technologies.",
      "type": "gradient"
    },
    {
      "id": 12,
      "title": "Apna Bank Apni Bhasha",
      "company": "Capstone:College Major Project",
      "date": "Present",
      "content": "Currently, I’m working on 'Apna Bank Apni Bhasha,' my college capstone project. I’m focusing on backend, API integration with ML models, and deployment. Apart this, Docker is intriguing me, and my next goal is to gain hands-on experience with it.",
      "type": "gradient"
    },    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        nextCard();
      }, 500500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, currentIndex]);

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    setTouchEndX(e.changedTouches[0].screenX);
    if (touchStartX - touchEndX > 50) {
      nextCard();
    }
    if (touchEndX - touchStartX > 50) {
      prevCard();
    }
  };

  return (
    <>
      <button className="carousel-arrow left-arrow" onClick={prevCard}>&lt;</button>
      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="cards-wrapper" style={{ transform: `translateX(${currentIndex * -100}%)` }}>
          {cards.map((card, index) => (
            <div key={card.id} className={`card large-card ${card.type}-card`}>
              <div style={{ position: 'relative' }}>
                <div className="punched-circle">{card.id}</div>
                <h4 className="timeline-title" style={{ marginLeft: 22, marginTop: -10 }}>{card.title}</h4>
                <p className="timeline-text underline">
                  <i>{card.company}</i>
                </p>
                <h6 className="timeline-date">
                  <i className="fa fa-calendar" /> {card.date}
                </h6>
                <p className="timeline-text">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow right-arrow" onClick={nextCard}>&gt;</button>
    </>
  );
};

export default JourneyCard;