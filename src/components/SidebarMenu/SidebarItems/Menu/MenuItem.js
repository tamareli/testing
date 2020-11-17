import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
function MenuItem(props) {
  return (
    <li className='leftBorder'>
      <NavLink
        to={props.path}
        exact
        className='text-left'
        onClick={props.click}
        id={props.id}
      >
        <i className={props.icon} /> <span>{props.title}</span>
        {props.active ? (
          <span className='pull-right-container'>
            <i className='fa fa-angle-left pull-right' />
          </span>
        ) : null}
      </NavLink>
    </li>
  );
}

export default MenuItem;
