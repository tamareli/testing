import React from 'react';

export default function Account() {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='box'>
          <div className='box-header with-border'>
            <h3 className='box-title pull-left'>Account</h3>
          </div>
          <form className='form-horizontal'>
            <div className='box-body'>
              <div className='form-group'>
                <label
                  htmlFor='shopifyStore'
                  className='col-sm-4 control-label'
                >
                  Shopify Connected Store:
                </label>
                <div className='col-sm-7'>
                  <input
                    type='text'
                    className='form-control'
                    id='shopifyStore'
                    placeholder='[storename]'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='ownerName' className='col-sm-4 control-label'>
                  Store Owner Name:
                </label>
                <div className='col-sm-7'>
                  <input
                    type='text'
                    className='form-control'
                    id='ownerName'
                    placeholder='[Name]'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='adminEmail' className='col-sm-4 control-label'>
                  Admin Email:
                </label>
                <div className='col-sm-7'>
                  <input
                    type='adminEmail'
                    className='form-control'
                    id='inputEmail3'
                    placeholder='[Email]'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
