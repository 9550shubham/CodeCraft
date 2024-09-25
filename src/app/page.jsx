import Image from 'next/image';

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="main-menu-text">
            👈🏻Explore
          </div>
          <div className="intro">
            <Image
              src="/imgs/Formal_DP.jpg"
              alt="Shubham Profile"
              className="shadow-dark"
              width= {270}
              height= {270}
            />
            <h1>Shubham Gandhi</h1>
            <p>An Engineer</p>
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
      </section>
    </main>
  );
}
