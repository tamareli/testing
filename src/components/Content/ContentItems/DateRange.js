import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

function DateRange() {
  return (
    <div className='col-lg-3 col-sm-6 col-xs-12'>
      <div className='form-group text-left' style={{ marginBottom: '30px' }}>
        <label>Date range:</label>
        <div className='input-group'>
          <div className='input-group-addon'>
            <i className='fa fa-calendar' />
          </div>
          <div>
            <DateRangePicker
              initialSettings={{
                showDropdowns: true,
                buttonClasses: 'Btn btn btn-sm',
                applyButtonClasses: 'applyBtn btn-success',
                cancelButtonClasses: 'cancelBtn btn-default',
                linkedCalendars: false,
              }}
            >
              <input
                type='text'
                className='form-control pull-right'
                id='reservation'
              />
            </DateRangePicker>
          </div>
        </div>
      </div>
      <div>
        <div className='form-group text-left'>
          <label>Comparison</label>
          <select className='form-control'>
            <option>Same Dates</option>
            <option>Last Period</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DateRange;
