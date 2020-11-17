import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import LogoMini from './LogoMini';

function Header() {
  return (
    <header className='main-header'>
      <a
        href='/'
        className='logo'
        style={{ backgroundColor: 'black', padding: '0 8px' }}
      >
        <span className='logo-mini'>
          <LogoMini />
        </span>
        <Logo />
      </a>
      <NavBar />
    </header>
  );
}

export default Header;
