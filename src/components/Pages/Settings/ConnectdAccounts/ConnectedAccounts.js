import React from 'react';
import ConnectedAccount from './ConnectedAccount';

export default function ConnectedAccounts() {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='box'>
          <div className='box-header with-border'>
            <h3 className='box-title pull-left'>Connected Accounts</h3>
          </div>
          <div
            className='box-body row'
            style={{ marginLeft: '0', padding: '0 1rem' }}
          >
            <ConnectedAccount
              accountType='Google Analytics'
              icon='fa fa-google-plus'
              btnType='btn-google'
              connected={false}
            />
            <ConnectedAccount
              accountType='Facebook'
              icon='fa fa-facebook'
              btnType='btn-facebook'
              connected={true}
            />
            <ConnectedAccount
              accountType='Bing'
              icon='B'
              btnType='btn-linkedin'
              connected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
