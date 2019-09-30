import React from 'react'
import linkedin from '../../src/assets/images/linkedin.svg'
import github from '../../src/assets/images/github.svg'
import message from '../../src/assets/images/message.svg'

const Navbar = () => {
  return (
    <div className="nav-links fixed-menu">
      <ul className="nav-icons">
        <li>
          <a target="_blank" href="hhttps://www.linkedin.com/in/vera-protopopova"><img src={linkedin} alt="Vera@LinkedIn"/></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Veraprot"><img src={github} alt="Vera@Github"/></a>
        </li>
        <li>
          <img src={message} alt=""/>
        </li>
      </ul>
      <ul className="links">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar