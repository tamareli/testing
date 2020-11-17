import React from 'react';

function RoasBox(props) {
  let salesPrecent;
  let roasPrecent;
  let data;
  if (props.data) {
    salesPrecent = getPrecentStyle(props.data.salesPrecent);

    if (props.data.roasNumber != undefined)
      roasPrecent = getPrecentStyle(props.data.roasPrecent);

    if (props.data) {
      data = (
        <div className='row'>
          <div className='col-lg-6 col-sm-6 col-xs-6'>
            <h4>Sales</h4>
            <h4>{props.data.salesNumber}</h4>
            {salesPrecent}
          </div>
          {props.data.roasPrecent != undefined ? (
            <div className='col-lg-6 col-sm-6 col-xs-6'>
              <h4>ROAS</h4>
              <h4>{props.data.roasNumber}</h4>
              {roasPrecent}
            </div>
          ) : null}
        </div>
      );
    }
  }

  let button = (
    <div
      className='text-center'
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'auto',
      }}
    >
      <button
        type='button'
        className='btn btn-md btn-primary'
        style={{ maxWidth: '100%', overflowX: 'auto' }}
      >
        Sync to see data
      </button>
    </div>
  );

  return (
    <div className='col-lg-4 col-xs-6'>
      {/* small box */}
      <div
        className={'small-box Box ' + props.bgColor}
        style={{ position: 'relative' }}
      >
        <div className='inner text-left'>
          <p className='muted txt-small' style={{ fontSize: '1.8rem' }}>
            {props.title}
          </p>
          {props.data != null ? data : button}
        </div>
        <a
          href='/'
          className='small-box-footer'
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        >
          <i className='fa fa-question-circle' />
        </a>
      </div>
    </div>
  );
}

export default RoasBox;
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
