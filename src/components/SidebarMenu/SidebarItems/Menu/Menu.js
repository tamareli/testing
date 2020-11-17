import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  state = {
    menuItems: [
      {
        id: 1,
        title: 'Overview',
        icon: 'fa fa-dashboard',
        path: '/',
        active: false,
      },
      {
        id: 2,
        title: 'Store Health',
        icon: 'fa fa-heart',
        path: '/StoreHealth',
        active: false,
      },
      {
        id: 3,
        title: 'ROAS',
        icon: 'fa fa-bitcoin',
        path: '/Roas',
        active: false,
      },
      {
        id: 4,
        title: 'Google Ads',
        icon: 'fa fa-google',
        path: '/GoogleAds',
        active: false,
      },
      {
        id: 5,
        title: 'Facebook Ads',
        icon: 'fa fa-facebook-square',
        path: '/FacebookAds',
        active: false,
      },
    ],
  };
  componentDidMount() {
    this.displayMenuItemArrow();
  }
  displayMenuItemArrow = () => {
    let menuItemId = parseInt(document.getElementsByClassName('active')[0].id);
    let updatedMenuItems = this.state.menuItems;
    for (let index = 0; index < updatedMenuItems.length; index++) {
      if (updatedMenuItems[index].id === menuItemId) {
        updatedMenuItems[index].active = true;
      }
    }
    this.setState({ menuItems: updatedMenuItems });
  };
  menuItemClickHandler = (id) => {
    let updatedMenuItems = this.state.menuItems;
    for (let index = 0; index < updatedMenuItems.length; index++) {
      if (updatedMenuItems[index].id === id)
        updatedMenuItems[index].active = true;
      else updatedMenuItems[index].active = false;
    }
    this.setState({ menuItems: updatedMenuItems });
  };
  render() {
    return (
      /* sidebar menu: : style can be found in sidebar.less */
      <ul className='sidebar-menu' data-widget='tree'>
        <li
          className='header text-left'
          style={{ paddingTop: '60px', marginTop: 0 }}
        >
          MAIN NAVIGATION
        </li>
        {this.state.menuItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              path={item.path}
              active={item.active}
              click={() => this.menuItemClickHandler(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default Menu;
