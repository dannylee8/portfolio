import React from 'react';
import './assets/stylesheets/app.scss';
import tree from '../src/assets/images/tree-city.png'
import profile from '../src/assets/images/profile.jpg'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="app-container">
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

        <div className="section title-section" id="about">
          <h2 className="section-header">Background</h2>
        </div>

        <div className="about-section">
          <div className="about-container row-container">
            <div className="profile-history">
              <p>
              Full stack web developer with  a mission to leave the world a better place than I found it. Currently employed at Flatiron School as an Software Engineering Coach. I have taught over 100 people how to create web apps with Ruby, Rails, SQL, JavaScript, React and Redux, and given self-made lectures on essential skills like Git, CSS, pair-programming and problem solving. I'm always looking for new ways to grow my skills as a software engineer and work with brilliant, dedicated people to create something amazing.
              </p>
              {/* <p>I love building things. I find hard engineering problems intrinsically fun to tackle, and love facing new challenges.</p> */}
              <br/>
              {/* <p>My personal interests include: 
                <ul>
                  <li>art</li>
                  <li>math</li>
                  <li>something else</li>
                </ul>
              </p> */}
            </div>
            <div className="profile-image">
              <img src={profile} alt=""/>
            </div>
          </div>
        </div>

        <div className="section title-section" id="experience">
          <h2 className="section-header">Experience</h2>
        </div>
        <div className="parallax-container">
          <div className="inner-container">
            <table>
              <tbody>
                <tr>
                  <th>Front End</th>
                  <th>Back End</th>
                  <th>Other</th>
                </tr>
                <tr>
                  <td>Javascript</td>
                  <td>NodeJS</td>
                  <td>Jira</td>
                </tr>
                <tr>
                  <td>React + Redux</td>
                  <td>Express</td>
                  <td>Confluence</td>
                </tr>
                <tr>
                  <td>Angular</td>
                  <td>Ruby</td>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>HTML</td>
                  <td>Rails</td>
                  <td>Github</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Sinatra</td>
                  <td>AWS</td>
                </tr>
                <tr>
                  <td>SCSS</td>
                  <td>MongoDB</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Flexbox/Grid</td>
                  <td>PostgreSQL</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="parallax">
            <img className="parallax-image" src={tree} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
