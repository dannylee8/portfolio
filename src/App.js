import React from 'react';
import './assets/stylesheets/app.scss';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <div className="navbar-Container">
        <Navbar/>
      </div>
      <div className="hero-container intro-page">
        <h1 className="name-title">Vera Protopopova</h1>
        <h5 className="roles">
          <span>Software Engineer</span>
          <span className="separator">|</span>
          <span>Educator</span>
          <span className="separator">|</span>
          <span>Creative</span>
        </h5>

        <div className="parallax">
          <img className="parallax-image" src="" alt=""/>
        </div>
      </div>

      <div className="section title-section">
        <h2 className="section-header">Background</h2>
      </div>

      <div className="about-section">
        <div className="about-container row-container">
          <div className="profile-history">
            <p>Having replaced Times New Roman as the default Microsoft Word font, Calibri is an excellent option for a safe, universally readable sans-serif font. Davis described the typeface as his "font of choice" when working with clients. Professional resume writer Donna Svei, also a strong advocate of Calibri, noted in her blog how smoothly it renders on computer screens.</p>
            <br/>
            <p>This serif font is another Microsoft Word staple. Created back in 2004, this typeface was designed to work well for "on-screen reading and to look good when printed at small sizes." Christian Eilers, a resume expert at Zety, said the font was a great choice for resumes and cover letters, even if it's often considered one of the more "traditional" options.</p>
          </div>
          <div className="profile-image"></div>
        </div>
      </div>

      <div className="section title-section">
        <h2 className="section-header">Projects</h2>
      </div>
      <div className="section title-section">
        <h2 className="section-header">Experience</h2>
      </div>
    </div>
  );
}

export default App;
