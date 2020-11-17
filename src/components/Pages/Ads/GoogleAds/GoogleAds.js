import React, { Component } from 'react';
import AdsInfo from '../AdsInfo';

export class GoogleAds extends Component {
  state = {
    searchAdInfoBoxes: [
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
    shoppingAdInfoBoxes: [
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
    searchChartLables: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    searchChartControls: [
      { id: 1, title: 'Sessions' },
      { id: 2, title: 'Conv. Rate' },
      { id: 3, title: 'Revenue' },
      { id: 4, title: 'ROAS' },
      { id: 5, title: 'CPA' },
    ],
    shoppingChartLables: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    shoppingChartControls: [
      { id: 1, title: 'Sessions' },
      { id: 2, title: 'Conv. Rate' },
      { id: 3, title: 'Revenue' },
      { id: 4, title: 'ROAS' },
      { id: 5, title: 'CPA' },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <AdsInfo
          chartLabels={this.state.searchChartLables}
          chartControls={this.state.searchChartControls}
          adInfoBoxes={this.state.searchAdInfoBoxes}
          title='Google Ads'
          subTitle='Search Campaigns'
          radioName='search'
        />
        <AdsInfo
          chartLabels={this.state.shoppingChartLables}
          chartControls={this.state.shoppingChartControls}
          adInfoBoxes={this.state.shoppingAdInfoBoxes}
          title='Google Ads'
          subTitle='Shopping Campaigns'
          radioName='shopping'
        />
      </React.Fragment>
    );
  }
}

export default GoogleAds;
