import React, { useState, useEffect } from "react";
import $ from "jquery";

const photos = [
  // empty slots for 2, 3
  "./personal-site/images/img1.png", "./personal-site/images/img4.png",
  "./personal-site/images/img5.png", "./personal-site/images/img6.png", "./personal-site/images/img7.png", "./personal-site/images/img8.png",
  "./personal-site/images/img9.png", "./personal-site/images/img10.png", "./personal-site/images/img11.png", "./personal-site/images/img12.png",
  "./personal-site/images/img13.png", "./personal-site/images/img14.png", "./personal-site/images/img15.png"
]

function Gallery() {
  const [currPhotoIndex, setCurrPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCurrPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
      }, 6000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isPlaying, currPhotoIndex])

  const showPrev = () => {
    setCurrPhotoIndex((currPhotoIndex - 1 + photos.length) % photos.length);
  }

  const showNext = () => {
    setCurrPhotoIndex((currPhotoIndex + 1) % photos.length);
  }

  const playPause = (continuePlay) => {
    setIsPlaying(continuePlay);
    if (continuePlay) {
      $("#play-photo").addClass("hidden");
      $("#pause-photo").removeClass("hidden");
    } else {
      $("#play-photo").removeClass("hidden");
      $("#pause-photo").addClass("hidden");
    }
  }

  return (
    <div className="background-3 about-gallery gallery-body">
      <div className="gallery-items">
        {photos.map((photo, index) => (
          <div key={index} className={`gallery-photo ${index === currPhotoIndex ? '' : 'hidden'}`}>
            <img src={photo} alt="about gallery item" />
          </div>
        ))}
      </div>
      <div className="proj-buttons">
        <button onClick={showPrev}>&lt;</button>
        <button id="pause-photo" onClick={() => playPause(false)}>Pause</button>
        <button id="play-photo" className="hidden" onClick={() => playPause(true)}>Play</button>
        <button onClick={showNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Gallery;