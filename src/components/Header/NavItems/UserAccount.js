import React from 'react';

function UserAccount() {
  return (
    /* User Account: style can be found in dropdown.less */
    <li className='dropdown user user-menu'>
      <a href='/' className='dropdown-toggle' data-toggle='dropdown'>
        <img src='user2-160x160.jpg' className='user-image' alt='User Image' />
        <span className='hidden-xs'>Alexander Pierce</span>
      </a>
      <ul className='dropdown-menu'>
        {/* User image */}
        <li className='user-header'>
          <img
            src='user2-160x160.jpg'
            className='img-circle'
            alt='User Image'
          />
          <p>
            Alexander Pierce - Web Developer
            <small>Member since Nov. 2012</small>
          </p>
        </li>
        {/* Menu Body */}
        <li className='user-body'>
          <div className='row'>
            <div className='col-xs-4 text-center'>
              <a href='/'>Followers</a>
            </div>
            <div className='col-xs-4 text-center'>
              <a href='/'>Sales</a>
            </div>
            <div className='col-xs-4 text-center'>
              <a href='/'>Friends</a>
            </div>
          </div>
          {/* /.row */}
        </li>
        {/* Menu Footer*/}
        <li className='user-footer'>
          <div className='pull-left'>
            <a href='/' className='btn btn-default btn-flat'>
              Profile
            </a>
          </div>
          <div className='pull-right'>
            <a href='/' className='btn btn-default btn-flat'>
              Sign out
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default UserAccount;
