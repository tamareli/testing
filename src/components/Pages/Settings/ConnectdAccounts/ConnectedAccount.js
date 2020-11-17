import React from 'react';

export default function ConnectedAccount(props) {
  let connectdBtnText = props.accountType + ' Connected!';
  let notConnectdBtnText = 'Connect to ' + props.accountType;
  let connectedAccountName = (
    <p style={{ margin: '0' }}>
      [{props.accountType} Ads account name]
      <span>
        <a href='#'> change</a>
      </span>
    </p>
  );

  return (
    <div className='row' style={{ padding: '1rem 1rem' }}>
      <div className='col-md-6 col-sm-6'>
        <a className={'btn btn-block btn-social ' + props.btnType}>
          <i className={props.icon} style={{ color: 'white' }}>
            {props.icon === 'B' ? props.icon : null}
          </i>
          {props.connected ? connectdBtnText : notConnectdBtnText}
        </a>
      </div>
      <div className='text-left' style={{ paddingLeft: '15px' }}>
        {props.connected ? connectedAccountName : null}
      </div>
    </div>
  );
}
