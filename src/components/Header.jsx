import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';

const Header = () => {
  return (
    <div className="header" style={{ width: '100%' }}>
      <nav
        className="header-nav"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 20px',
        }}
      >
        <a href="" className="home-button" aria-label="Home">
          <img src={logo} alt="" className="logo" />
        </a>
        <div
          className="tab-menu"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ul
            className="tab-menu-list"
            style={{
              display: 'flex',
              flexDirection: 'row',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li><a href="" className="tab about-me" style={{ padding: '8px 12px' }}>About Me</a></li>
            <li><a href="" className="tab credentials" style={{ padding: '8px 12px' }}>Credentials</a></li>
            <li><a href="" className="tab skills" style={{ padding: '8px 12px' }}>Skills</a></li>
            <li><a href="" className="tab projects" style={{ padding: '8px 12px' }}>Projects</a></li>
            <li><a href="" className="tab contact" style={{ padding: '8px 12px' }}>Contact</a></li>
          </ul>
          
        </div>
      </nav>
    </div>
  )
}

export default Header