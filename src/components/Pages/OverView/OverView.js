import React, { Component } from 'react';
import Chart from '../../Content/ContentItems/Chart/Chart';
import ContentHeader from '../../Content/ContentItems/ContentHeader';
import InfoBoxes from '../../Content/ContentItems/InfoBoxes';
import DateRange from '../../Content/ContentItems/DateRange';
import ChartControl from '../../Content/ContentItems/Chart/ChartControl';
class Content extends Component {
  state = {
    infoBoxes: [
      {
        id: 1,
        bgColor: 'bg-aqua',
        icon: 'ion ion-bag',
        title: 'Store Sales',
        number: '13,342',
        precent: '+23%',
      },
      {
        id: 2,
        bgColor: 'bg-green',
        icon: 'ion ion-stats-bars',
        title: 'ROAS',
        number: '603%',
        precent: '-23%',
      },
      {
        id: 3,
        bgColor: 'bg-yellow',
        icon: 'ion ion-pie-graph',
        title: 'YTD Sales',
        number: '45,345$',
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
      { id: 1, title: 'Total Sales' },
      { id: 2, title: 'Discounts' },
      { id: 3, title: 'Returns' },
      { id: 4, title: 'Shipping' },
      { id: 5, title: 'Tax' },
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
              <Chart labels={this.state.chartLables} radioName='overview' />
            </div>
            <div className='col-lg-3' style={{ height: '100%' }}>
              <ChartControl controls={this.state.chartControls} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
