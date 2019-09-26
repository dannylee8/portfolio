import React from 'react';
import './assets/stylesheets/app.scss';
import tree from '../src/assets/images/tree-city.jpg'
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
          <img className="parallax-image" src={tree} alt=""/>
        </div>
      </div>

      <div className="section title-section">
        <h2 className="section-header">Background</h2>
      </div>

      <div className="about-section">
        <div className="about-container row-container">
          <div className="profile-history">
            <p>
            Full stack web developer with  a mission to leave the world a better place than I found it. Currently employed at Flatiron School as an Software Engineering Coach. I have taught over 100 people how to create web apps with Ruby, Rails, SQL, JavaScript, React and Redux, and given self-made lectures on essential skills like Git, CSS, pair-programming and problem solving. I'm always looking for new ways to grow my skills as a software engineer and work with brilliant, dedicated people to create something amazing.
            </p>
            <p>I love building things. I find hard engineering problems intrinsically fun to tackle, and love facing new challenges.</p>
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
      <div className="parallax-container">
        <div className="inner-container">
          <table>
            <tbody>
              <tr>
                <td>Front End</td>
                <td>Back End</td>
                <td>Back End</td>
              </tr>
              <tr>
                <td>React + Redux</td>
                <td>NodeJS</td>
                <td>Back End</td>
              </tr>
              <tr>
                <td>Angular</td>
                <td>Rails</td>
                <td>Back End</td>
              </tr>
              <tr>
                <td>HTML + CSS</td>
                <td>Sinatra</td>
                <td>Back End</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
