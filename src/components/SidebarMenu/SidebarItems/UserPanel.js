import React from 'react';

function UserPanel() {
  return (
    /* Sidebar user panel */
    <div className='user-panel' style={{ paddingBottom: '30px' }}>
      <div className='text-left info' style={{ left: '10px' }}>
        <p>[connected_store_name]</p>
      </div>
    </div>
  );
}

export default UserPanel;
