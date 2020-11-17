import React from 'react';

function AdInfoBox(props) {
  let precent = getPrecentStyle(props.precent);

  return (
    <div className='col-lg-3 col-xs-6'>
      {/* small box */}
      <div className={'small-box ' + props.bgColor}>
        <div className='inner text-left' style={{ overflowX: 'auto' }}>
          <h4 className='muted' style={{ fontWeight: 400, fontSize: '26px' }}>
            {props.title}
          </h4>
          <h4 style={{ fontWeight: 550 }}>{props.number}</h4>
          {precent}
        </div>
        <a href='/' className='small-box-footer'>
          <i className='fa fa-question-circle' />
        </a>
      </div>
    </div>
  );
}

export default AdInfoBox;
function getPrecentStyle(precent) {
  let positive = precent.includes('+');
  let updatedPrecent = (
    <p>
      <span className='text-success text-muted'>
        <b>{precent + ' '}</b>
      </span>
    </p>
  );
  if (!positive)
    updatedPrecent = (
      <p>
        <span className='text-danger'>
          <b>{precent + ' '}</b>
        </span>
      </p>
    );
  return updatedPrecent;
}
