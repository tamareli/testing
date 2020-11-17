import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'jquery/src/jquery';
import '../node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/admin-lte/bower_components/font-awesome/css/font-awesome.min.css';
import '../node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css';
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/_all-skins.min.css';
import '../node_modules/admin-lte/bower_components/morris.js/morris.css';
import '../node_modules/admin-lte/bower_components/jvectormap/jquery-jvectormap.css';
import '../node_modules/admin-lte/plugins/iCheck/all.css';
import '../node_modules/admin-lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import '../node_modules/admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.css';
import '../node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
import '../node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min';
import '../node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min';
import '../node_modules/admin-lte/plugins/iCheck/icheck.min.js';
import '../node_modules/admin-lte/bower_components/fastclick/lib/fastclick.js';
import '../node_modules/admin-lte/dist/js/adminlte.min.js';
import '../node_modules/admin-lte/bower_components/jquery-ui/jquery-ui.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
