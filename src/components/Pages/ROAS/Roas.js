import React, { Component } from 'react';
import RoasBoxes from './RoasBoxes';
import DateRange from '../../Content/ContentItems/DateRange';
import ContentHeader from '../../Content/ContentItems/ContentHeader';

export class Roas extends Component {
  state = {
    infoBoxes: [
      {
        id: 1,
        bgColor: 'bg-aqua',
        title: 'Google Ads',
        data: {
          salesNumber: '24k$',
          salesPrecent: '+12%',
          roasNumber: '234%',
          roasPrecent: '-10%',
        },
      },
      {
        id: 2,
        bgColor: 'bg-green',
        title: 'Facebook Ads',
        data: {
          salesNumber: '24k$',
          salesPrecent: '+12%',
          roasNumber: '234%',
          roasPrecent: '-10%',
        },
      },
      {
        id: 3,
        bgColor: 'bg-yellow',
        title: 'Organic',
        data: {
          salesNumber: '24k$',
          salesPrecent: '+12%',
        },
      },
      {
        id: 4,
        bgColor: 'bg-red',
        title: 'Bing Ads',
        data: null,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <ContentHeader title='ROAS' subTitle='Control panel' />
        <div className='content'>
          <div className='row is-flex'>
            <div className='col-lg-9'>
              <div className='row'>
                <RoasBoxes boxes={this.state.infoBoxes} />
              </div>
            </div>
            <DateRange />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Roas;
