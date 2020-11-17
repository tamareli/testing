import React, { Component } from 'react';
import ContentHeader from '../../Content/ContentItems/ContentHeader';
import Account from './Account';
import ConnectedAccounts from './ConnectdAccounts/ConnectedAccounts';
import Plan from './Plan';

export class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentHeader title='Settings' subTitle='' />
        <div className='content'>
          <Account />
          <ConnectedAccounts />
          <Plan />
        </div>
      </React.Fragment>
    );
  }
}

export default Settings;
