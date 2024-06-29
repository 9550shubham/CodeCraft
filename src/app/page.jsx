export default async function Home() {

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
            <h1>Shubham</h1>
            <p>Expertise</p>
            <div className="social-links">
              {/* <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                <i className="icon-[simple-icons--leetcode]"></i>
              </a> */}
              {/* <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a> */}
              <a href="https://github.com/9550shubham" target="_blank">
                <i className="fa fa-github" />
              </a>
              {/* <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a> */}
              <a href="https://www.linkedin.com/in/shubham-gandhi-09292a230/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
