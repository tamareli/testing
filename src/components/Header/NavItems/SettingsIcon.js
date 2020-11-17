import React from 'react';
import { Link } from 'react-router-dom';

function SettingsIcon() {
  return (
    <li>
      <Link to='/Settings'>
        {/*data-toggle='control-sidebar'*/}
        <i className='fa fa-gears' />
      </Link>
    </li>
  );
}

export default SettingsIcon;
