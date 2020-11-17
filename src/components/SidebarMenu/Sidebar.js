import React from 'react';
import UserPanel from './SidebarItems/UserPanel';
import SearchForm from './SidebarItems/SearchForm';
import Menu from './SidebarItems/Menu/Menu';

function Sidebar() {
  return (
    <aside className='main-sidebar'>
      {/* sidebar: style can be found in sidebar.less */}
      <section className='sidebar'>
        <UserPanel />
        <SearchForm />
        <Menu />
      </section>
      {/* /.sidebar */}
    </aside>
  );
}

export default Sidebar;
