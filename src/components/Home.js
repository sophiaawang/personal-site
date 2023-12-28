import React from "react";
import ProjectGallery from "./ProjectGallery"
import Resume from "./Resume";

export function Home() {
  return (
    <div>
      <div className="background">
        <div id="home-body">
          <header>
            <h1>
              Hi,<br /> I'm Sophia!
            </h1>
          </header>
          <p className="bio">Welcome to my portfolio site!</p>
          <p className="bio">
            Click <a href="about.html" className="link-no-padding">here</a> to learn more about me.
          </p>
        </div>
        {/* Source: original creation */}
        <div id="profile-picture" className="img-container">
          <img src="/images/profile-picture.png" alt="profile picture" />
        </div>
      </div>
      <div className="gallery-resume">
        <div className="proj-col"><ProjectGallery /></div>
        <Resume />
      </div>
    </div>
  );
}

export default Home;