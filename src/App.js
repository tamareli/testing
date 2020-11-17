import './App.css';
import React from 'react';
import Layout from './hoc/Layout/Layout';
import OverView from './components/Pages/OverView/OverView';
import StoreHealth from './components/Pages/StoreHealth/StoreHealth';
import Roas from './components/Pages/ROAS/Roas';
import FacebookAds from './components/Pages/Ads/FacebookAds/FacebookAds';
import GoogleAds from './components/Pages/Ads/GoogleAds/GoogleAds';
import Settings from './components/Pages/Settings/Settings';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div id='wrapper'>
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route path='/' exact component={OverView} />
              <Route path='/StoreHealth' exact component={StoreHealth} />
              <Route path='/Roas' exact component={Roas} />
              <Route path='/FacebookAds' exact component={FacebookAds} />
              <Route path='/GoogleAds' exact component={GoogleAds} />
              <Route path='/Settings' exact component={Settings} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
