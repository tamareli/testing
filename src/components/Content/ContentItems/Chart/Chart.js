import { Line } from 'react-chartjs-2';
import CheckBox from './CheckBox';

import React, { Component } from 'react';

export default class Chart extends Component {
  state = {
    data: {
      labels: this.props.labels,
      datasets: [
        {
          label: 'Digital Goods',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.9)',
          pointRadius: false,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: 'Electronics',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 0)',
          pointRadius: false,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
    areaChartOptions: {
      maintainAspectRatio: 1,
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  };
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'chartScript.js';
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className='box box-primary'>
        <div className='box-header with-border text-left'>
          <h3 className='box-title'>Income Over Time</h3>
          <div className='box-tools pull-right'>
            <div className='form-group'>
              <CheckBox label='D' radioName={this.props.radioName} />
              <CheckBox label='M' radioName={this.props.radioName} />
              <CheckBox label='Y' radioName={this.props.radioName} />
            </div>
          </div>
        </div>
        <div className='box-body'>
          <div className='chart'>
            <Line
              data={this.state.data}
              width={null}
              height={250}
              options={this.state.areaChartOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}
