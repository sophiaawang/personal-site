import React, { useState, useEffect } from "react";
import $ from "jquery";

const projects = [
  {
    title: "Google | Computer Science Summer Institute (CSSI) | Online",
    date: "Aug. 2022",
    description: "Created a live Monkeypox case tracker that displays worldwide case numbers, cases per country, an interactive map, and data charts with a partner using HTML, CSS, Javascript, libraries such as Google Charts and JQuery, and APIs",
    imageSrc: "/images/monkeypoxSite.png",
  },
  {
    title: "Personal Site! | Made For Fun",
    date: "Sept. 2022",
    description: "To practice and learn more about HTML and CSS, I created this personal site for fun based on a wireframe design made in Google Slides. No templates or libraries were used as a challenge to just use CSS.",
    imageSrc: "/images/thisSite.png",
  },
  {
    title: "Nature Views | Made For iOS Applications Development Class",
    date: "May 2021",
    description: "For class, I created a nature exploration app with multiple pages or locations to 'travel' through, filled with sounds and videos. Users can tap through a slideshow of different pictures and different audios for each location, and they can play some fun nature videos for each. I used segues, audio + video players, information popups and more to create my app. Shown are 4 out of the 7 pages of the app (Mountain, Beach paths and info page not shown).",
    imageSrc: "/images/natureViews.png",
  },
  {
    title: "War! | Made For iOS Applications Development Class",
    date: "Early 2021",
    description: "For class, I created a remake of the classic card game War! with my own cards made on Canva. Cards are randomly generated for players and the score is tallied for Players 1 and 2.",
    imageSrc: "/images/war.png",
  },
  {
    title: "Haunted House | Made For iOS Applications Development Class",
    date: "Early 2021",
    description: "For class, I created a story simulation for a haunted house where the user would make decisions while going through a haunted house and try to survive till the end. If they make the wrong choice, the user 'dies' and has the option to start over.",
    imageSrc: "/images/hauntedHouse.png",
  },
];

function ProjectItem({ title, date, description, imageSrc }) {
  return (
    <div className="proj-container">
      <div className="proj-info">
        <h4>{title}</h4>
        <h5>{date}</h5>
        <ul>
          <li>{description}</li>
        </ul>
      </div>
      <div className="proj-photo">
        <img src={imageSrc} alt={`${title}`} />
      </div>
    </div>
  );
}

function Projects() {
  const [currProjectIndex, setCurrProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCurrProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 6000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isPlaying, currProjectIndex, projects.length])

  const showPrev = () => {
    setCurrProjectIndex((currProjectIndex - 1 + projects.length) % projects.length);
  }

  const showNext = () => {
    setCurrProjectIndex((currProjectIndex + 1) % projects.length);
  }

  const playPause = (continuePlay) => {
    setIsPlaying(continuePlay);
    if (continuePlay) {
      $("#play").addClass("hidden")
      $("#pause").removeClass("hidden")
    } else {
      $("#play").removeClass("hidden")
      $("#pause").addClass("hidden")
    }
  }

  return (
    <div className="background-2">
      <div id="proj-body">
        <div id="all-proj">
          {projects.map((project, index) => (
            <div key={index} className={`proj-container ${index === currProjectIndex ? '' : 'hidden'}`}>
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
        <div className="proj-buttons">
          <button id="prev" onClick={showPrev}>&lt;</button>
          <button id="pause" onClick={() => playPause(false)}>Pause</button>
          <button id="play" className="hidden" onClick={() => playPause(true)}>Play</button>
          <button id="next" onClick={showNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;