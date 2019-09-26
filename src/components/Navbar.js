import React from 'react'
import {Delete} from '@material-ui/icons';
import linkedin from '../../src/assets/images/linkedin.svg'
import github from '../../src/assets/images/github.svg'

const Navbar = (props) => {
  return (
    <ul className="nav-links fixed-menu">
      <li>
        <img src={linkedin} alt=""/>
      </li>
      <li><img src={github} alt=""/></li>
    </ul>
  )
}

export default Navbar