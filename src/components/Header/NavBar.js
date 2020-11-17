import React from 'react';
import DataStatus from './NavItems/DataStatus';
import Notifacation from './NavItems/Notifacation';
import UserAccount from './NavItems/UserAccount';
import SettingsIcon from './NavItems/SettingsIcon';

function NavBar() {
  return (
    <nav
      className='navbar navbar-static-top'
      style={{ backgroundColor: '#44aca8' }}
    >
      {/* Sidebar toggle button*/}
      <a
        href='/'
        className='sidebar-toggle'
        data-toggle='push-menu'
        role='button'
        style={{ backgroundColor: '#44aca8' }}
      >
        <span className='sr-only'>Toggle navigation</span>
      </a>

      <div className='navbar-custom-menu'>
        <ul className='nav navbar-nav'>
          <DataStatus />
          <Notifacation />
          <UserAccount />
          <SettingsIcon />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
