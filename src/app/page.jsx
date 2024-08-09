// export default async function Home() {

//   return (
//     <main>
//       <section className="home section" id="home">
//         <div className="container">
//           <div className="intro">
//             <img
//               src="/imgs/shubham1.jpg"
//               alt="Shubham Profile"
//               className="shadow-dark"
//             />
//             <h1>Shubham Gandhi</h1>
//             <p>Software Developer</p>
//             <div className="social-links">
//               <a href="https://github.com/9550shubham" target="_blank">
//                 <i className="fa fa-github" />
//               </a>
//               <a href="https://www.linkedin.com/in/shubham-gandhi-09292a230/" target="_blank">
//                 <i className="fa fa-linkedin" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="floating-text">Dive into CodeCraft</div>
//       </section>
//     </main>
//   );
// }
// Add this useEffect hook in your Home function
'use client';

import { useEffect } from "react";

export default async function Home() {
  useEffect(() => {
    const floatingText = document.querySelector(".floating-text");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = 2;
    let dy = 2;

    const animate = () => {
      x += dx;
      y += dy;

      if (x + floatingText.clientWidth > window.innerWidth || x < 0) {
        dx *= -1;
      }

      if (y + floatingText.clientHeight > window.innerHeight || y < 0) {
        dy *= -1;
      }

      floatingText.style.left = `${x}px`;
      floatingText.style.top = `${y}px`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/shubham1.jpg"
              alt="Shubham Profile"
              className="shadow-dark"
            />
            <h1>Shubham Gandhi</h1>
            <p>Software Developer</p>
            <div className="social-links">
              <a href="https://github.com/9550shubham" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-gandhi-09292a230/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="floating-text">Dive into CodeCraft</div>
      </section>
    </main>
  );
}
