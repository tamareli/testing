import React from 'react';

function InfoBox(props) {
  let precent = getPrecentStyle(props.precent);

  let sec = null;
  if (props.title === 'Website Speed')
    sec = (
      <span className='muted' style={{ fontSize: '14px' }}>
        {' '}
        sec
      </span>
    );
  return (
    <div className='col-lg-3 col-xs-6'>
      {/* small box */}
      <div className={'small-box ' + props.bgColor}>
        <div className='inner text-left' style={{ overflowX: 'auto' }}>
          <p className='muted'>{props.title}</p>
          <h3 style={{ fontWeight: 550 }}>
            {props.number}
            {sec}
          </h3>
          {precent}
        </div>
        <div className='icon'>
          <i className={props.icon} />
        </div>
        <a href='/' className='small-box-footer'>
          <i className='fa fa-question-circle' />
        </a>
      </div>
    </div>
  );
}

export default InfoBox;
function getPrecentStyle(precent) {
  let positive = precent.includes('+');
  let updatedPrecent = (
    <p>
      <span className='text-success text-muted'>
        <b>{precent + ' '}</b>
      </span>
      from last month
    </p>
  );
  if (!positive)
    updatedPrecent = (
      <p>
        <span className='text-danger'>
          <b>{precent + ' '}</b>
        </span>
        from last month
      </p>
    );
  return updatedPrecent;
}
