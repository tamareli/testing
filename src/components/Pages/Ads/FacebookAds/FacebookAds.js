import React, { Component } from 'react';
import AdsInfo from '../AdsInfo';

export class FacebookAds extends Component {
  state = {
    AdInfoBoxes: [
      {
        id: 1,
        bgColor: 'bg-aqua',
        title: 'Sessions',
        number: '$12,321',
        precent: '+12%',
      },
      {
        id: 2,
        bgColor: 'bg-green',
        title: 'Conv. Rate',
        number: '1.5%',
        precent: '+12%',
      },
      {
        id: 3,
        bgColor: 'bg-yellow',
        title: 'Revenue',
        number: '$34,233',
        precent: '-5%',
      },
      {
        id: 4,
        bgColor: 'bg-red',
        title: 'ROAS',
        number: '300%',
        precent: '-5%',
      },
      {
        id: 5,
        bgColor: 'bg-turquoise',
        title: 'CPA',
        number: '$43',
        precent: '-5%',
      },
    ],

    chartLables: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    chartControls: [
      { id: 1, title: 'Sessions' },
      { id: 2, title: 'Conv. Rate' },
      { id: 3, title: 'Revenue' },
      { id: 4, title: 'ROAS' },
      { id: 5, title: 'CPA' },
    ],
  };

  render() {
    return (
      <AdsInfo
        chartLabels={this.state.chartLables}
        chartControls={this.state.chartControls}
        adInfoBoxes={this.state.AdInfoBoxes}
        title='Facebook Ads'
        subTitle=''
        radioName='facebook'
      />
    );
  }
}

export default FacebookAds;
