import React, { Component } from 'react';
import Chart from '../../Content/ContentItems/Chart/Chart';
import ContentHeader from '../../Content/ContentItems/ContentHeader';
import InfoBoxes from '../../Content/ContentItems/InfoBoxes';
import DateRange from '../../Content/ContentItems/DateRange';
import ChartControl from '../../Content/ContentItems/Chart/ChartControl';

class StoreHealth extends Component {
  state = {
    infoBoxes: [
      {
        id: 1,
        bgColor: 'bg-aqua',
        icon: 'ion ion-person-add',
        title: 'Sessions',
        number: '13,342',
        precent: '+23%',
      },
      {
        id: 2,
        bgColor: 'bg-green',
        icon: 'ion ion-stats-bars',
        title: 'Converstion Rate',
        number: '603%',
        precent: '-5%',
      },
      {
        id: 3,
        bgColor: 'bg-yellow',
        icon: 'ion ion-pie-graph',
        title: 'Website Speed',
        number: '5.4',
        precent: '+30%',
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
      { id: 2, title: 'Converstion Rate' },
      { id: 3, title: 'Site Speed' },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <ContentHeader title='Dashboard' subTitle='Control panel' />
        <div className='content'>
          <div className='row'>
            <InfoBoxes boxes={this.state.infoBoxes} />
            <DateRange />
          </div>
          <div className='row'>
            <div className='col-lg-9'>
              <Chart labels={this.state.chartLables} radioName='storeHealth' />
            </div>
            <div className='col-lg-3'>
              <ChartControl controls={this.state.chartControls} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StoreHealth;
