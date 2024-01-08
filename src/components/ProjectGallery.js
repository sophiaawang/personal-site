import React, { useState, useEffect } from "react";
import $ from "jquery";

const projects = [
  {
    title: "Spoken Digits Classifier - ECE 2720 Final Programming Contest",
    date: "Dec. 2023",
    description: "Trained an SVM classifier on and used Fourier transform to de-noise 40k WAV files, each with either Gaussian white noise or one high-frequency noise randomly added, that recognizes which two digits are being spoken in each file.",
    imageSrc: "./images/ECE2720.png",
  },
  {
    title: "Sneep - Intro to Backend HackChallenge",
    date: "Dec. 2023",
    description: "Deployed an API with Docker & Google Cloud that stores sleep & dream data in a database with SQLAlchemy and that has HTTP endpoints using Flask (eg: create a new sleep, get most common dream words using SLTK, etc.).",
    imageSrc: "./images/Sneep.png",
  },
  {
    title: "UnOCaml - CS 3110 Final Project",
    date: "Dec. 2023",
    description: "Created a terminal-based simulator in OCaml of the card game UNO (108 total cards) that supports multiplayer and multi-round gameplay with human or smart robot opponents using functional programming principles. Utilized agile software practices with test-driven development, feature sprints, and git for version control.",
    imageSrc: "./images/UnOCaml.png",
  },
  {
    title: "CUEat - Intro to iOS HackChallenge",
    date: "April 2023",
    description: "Led the creation of a recipe app frontend with SwiftUI that uses UICollectionViews and push controllers. Spearheaded features for displaying recipe info & images, and filtering and adding new recipes to a database.",
    imageSrc: "./images/CUEat.png",
  },

  {
    title: "Google - Computer Science Summer Institute (CSSI)",
    date: "Aug. 2022",
    description: "Created a live Monkeypox case tracker that displays worldwide case numbers, cases per country, an interactive map, and data charts with a partner using HTML, CSS, Javascript, libraries such as Google Charts and JQuery, and APIs",
    imageSrc: "./images/monkeypoxSite.png",
  },
  {
    title: "Personal Site!",
    date: "Sept. 2022",
    description: "To practice and learn more about HTML and CSS, I created this personal site for fun based on a wireframe design made in Google Slides. No templates or libraries were used as a challenge to just use CSS. Then, in 2023, I revamped this site to what you currently see using React!",
    imageSrc: "./images/thisSite.png",
  },
  {
    title: "Nature Views - iOS Applications Development (CCHS)",
    date: "May 2021",
    description: "I created a nature exploration app with multiple pages or locations to 'travel' through, filled with sounds and videos. Users can tap through a slideshow of different pictures and different audios for each location, and they can play some fun nature videos for each. I used segues, audio + video players, information popups and more to create my app. Shown are 4 out of the 7 pages of the app (Mountain, Beach paths and info page not shown).",
    imageSrc: "./images/natureViews.png",
  },
  {
    title: "War! - iOS Applications Development (CCHS)",
    date: "Early 2021",
    description: "I created a remake of the classic card game War! with my own cards made on Canva. Cards are randomly generated for players and the score is tallied for Players 1 and 2.",
    imageSrc: "./images/war.png",
  },
  {
    title: "Haunted House - iOS Applications Development (CCHS)",
    date: "Early 2021",
    description: "I created a story simulation for a haunted house where the user would make decisions while going through a haunted house and try to survive till the end. If they make the wrong choice, the user 'dies' and has the option to start over.",
    imageSrc: "./images/hauntedHouse.png",
  },
];

function ProjectItem({ title, date, description, imageSrc }) {
  return (
    <div className="gallery-item">
      <div className="proj-info">
        <h4>{title}</h4>
        <h5>{date}</h5>
        <ul>
          <li>{description}</li>
        </ul>
      </div>
      <div className="gallery-photo">
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
  }, [isPlaying, currProjectIndex])

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
      <div className="proj-body">
        <div className="gallery-items">
          {projects.map((project, index) => (
            <div key={index} className={`gallery-item ${index === currProjectIndex ? '' : 'hidden'}`}>
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