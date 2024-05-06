import React from "react";
import ProjectGallery from "./ProjectGallery"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const openResume = () => {
  window.open("Sophia_Wang_Resume.pdf", "_blank");
}

const openProjects = () => {
  window.location.href = '/projects'
}

export function Home() {
  return (
    <div>
      <div className="pink-background">
        <div className="background">
          <div id="home-body">
            <header>
              <h1>
                Hi,<br /> I'm Sophia!
              </h1>
            </header>
            <p className="bio">Welcome to my portfolio site!</p>
            <p className="bio">
              Click <Link to="/about" className="link-no-padding">here</Link> to learn more about me.
            </p>
          </div>
          <div id="profile-picture" className="img-container">
            <img src="./images/profile-picture.png" alt="profile" />
          </div>
        </div>
        <div className="socials">
          <button className="page-buttons" onClick={openResume}>Resume</button>
          <Link className="link-button" to="/projects">Projects</Link>
          {/* <button className="page-buttons" onClick={openProjects}>Projects</button> */}
          <a className='socialmedia' href="https://www.linkedin.com/in/sophia-wang--/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a className='socialmedia' href="https://github.com/sophiaawang" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;