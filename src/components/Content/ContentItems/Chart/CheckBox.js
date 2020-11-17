import React from 'react';

function CheckBox(props) {
  return (
    <label style={{ marginRight: '15px' }}>
      <div
        className='iradio_flat-green'
        aria-checked='false'
        aria-disabled='false'
        style={{ position: 'relative' }}
      >
        <input
          type='radio'
          name={props.radioName}
          className='flat-red'
          defaultChecked
          style={{ position: 'absolute', opacity: 0 }}
        />
        <ins
          className='iCheck-helper'
          style={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            display: 'block',
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            background: 'rgb(255, 255, 255)',
            border: 0,
            opacity: 0,
          }}
        />
      </div>
      {props.label}
    </label>
  );
}

export default CheckBox;
