import React, { useState, useLayoutEffect } from "react";
import ProjectGallery from "./ProjectGallery.js"
import ProjectGrid from "./ProjectGrid.js"

function Projects() {
  const [view, setView] = useState("gallery");

  const changeView = (evt) => {
    setView(evt.target.value)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="page-body">
      {/* <div className="view-buttons">
        <button value="grid" onClick={(evt) => changeView(evt)}>Grid</button>
        <button value="gallery" onClick={(evt) => changeView(evt)}>Gallery</button>
      </div> */}
      <p>Check out my github <a href="https://github.com/sophiaawang" target="_blank" rel="noreferrer">(@sophiaawang)</a> for more!</p>
      {view === "grid" && <ProjectGrid />}
      {view === "gallery" && <ProjectGallery />}
    </div>
  );
}

export default Projects;