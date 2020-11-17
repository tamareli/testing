import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/SidebarMenu/Sidebar';
import ContentHeader from '../../components/Content/ContentItems/ContentHeader';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <main className='content-wrapper'>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
