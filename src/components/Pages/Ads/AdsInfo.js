import React from 'react';
import ContentHeader from '../../Content/ContentItems/ContentHeader';
import DateRange from '../../Content/ContentItems/DateRange';
import Chart from '../../Content/ContentItems/Chart/Chart';
import ChartControl from '../../Content/ContentItems/Chart/ChartControl';
import AdInfoBoxes from './AdInfoBoxes';

export default function Search(props) {
  return (
    <React.Fragment>
      <ContentHeader title={props.title} subTitle={props.subTitle} />
      <div className='content'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              <AdInfoBoxes boxes={props.adInfoBoxes} />
            </div>
          </div>
          <DateRange />
        </div>
        <div className='row'>
          <div className='col-lg-9'>
            <Chart labels={props.chartLabels} radioName={props.radioName} />
          </div>
          <div className='col-lg-3'>
            <ChartControl controls={props.chartControls} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
