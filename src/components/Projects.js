import React, { useState } from "react";
import ProjectGallery from "./ProjectGallery.js"
import ProjectGrid from "./ProjectGrid.js"

function Projects() {
  const [view, setView] = useState("grid");

  const changeView = (evt) => {
    setView(evt.target.value)
  }

  return (
    <div className="page-body">
      <div className="view-buttons">
        <button value="grid" onClick={(evt) => changeView(evt)}>Grid</button>
        <button value="gallery" onClick={(evt) => changeView(evt)}>Gallery</button>
      </div>
      {view === "grid" && <ProjectGrid />}
      {view === "gallery" && <ProjectGallery />}
    </div>
  );
}

export default Projects;