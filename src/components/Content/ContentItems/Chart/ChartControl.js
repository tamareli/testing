import React from 'react';
import ControlButton from './ControlButton';

function ChartControl(props) {
  return (
    <div
      className='box box-primary'
      style={{
        padding: '1rem 6rem 6.2rem 6rem',
        height: '100%',
      }}
    >
      <div className='box-header'>
        <h3 className='box-title'>Chart Control</h3>
      </div>
      <div className='box-body'>
        {props.controls.map((control) => {
          return <ControlButton key={control.id} title={control.title} />;
        })}
      </div>
    </div>
  );
}

export default ChartControl;
