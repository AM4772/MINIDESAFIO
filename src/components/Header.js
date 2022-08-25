import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='container'>
      <ul>
        <li>
          <Link to = '/students' target='_blank' rel='noopener,noreferrer'><button className = 'btn'>Students</button></Link>
        </li>
        <br />
        <li>
          <Link to = '/form' target='_blank' rel='noopener,noreferrer'><button className = 'btn'>Form</button></Link>
        </li>
      </ul>     
    </div>
  )
}

export default Header
