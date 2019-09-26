import React from 'react'
import linkedin from '../../src/assets/images/linkedin.svg'
import github from '../../src/assets/images/github.svg'

const Navbar = (props) => {
  return (
    <div className="nav-links fixed-menu">
      <ul className="nav-icons">
        <li>
          <img src={linkedin} alt=""/>
        </li>
        <li><img src={github} alt=""/></li>
      </ul>
      <ul className="links">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar