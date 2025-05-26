import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story">
      {/* Image section */}
      <div className="our-story-img">
        <img src="/imagini/pexels-photo-3845983.png" alt="Story" />
        <a href="#" className="story-play-btn">
          <i className="fa-solid fa-play"></i>
          Play video
        </a>
      </div>

      {/* Text section */}
      <div className="our-story-text">
        <h2>Scurtă istorie despre noi.</h2>
        <p>
          Centrul de Diagnostic Italian a fost fondat pentru a aduce în Moldova standarde medicale europene. Cu sprijinul specialiștilor din Italia și echipamente moderne, oferim servicii sigure, precise și accesibile tuturor pacienților, într-un mediu confortabil și profesionist.
        </p>
        <p>
          Ne dezvoltăm constant pentru a răspunde nevoilor pacienților moderni.
        </p>

        <div className="story-number-container">
          <div className="story-number-box s-n-box1">
            <strong>1000+</strong>
            <span>Clienti Multumiti</span>
          </div>
          <div className="story-number-box s-n-box2">
            <strong>215+</strong>
            <span>Doctori Experti</span>
          </div>
          <div className="story-number-box s-n-box3">
            <strong>310+</strong>
            <span>De Locuri pentru clienti</span>
          </div>
          <div className="story-number-box s-n-box4">
            <strong>106+</strong>
            <span>Premii Primite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;