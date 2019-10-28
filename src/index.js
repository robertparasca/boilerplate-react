import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import 'antd/dist/antd.css';
import './assets/scss/index.scss';

import App from './layout/App';
import { config } from './utils/config';

// Sentry.init({ dsn: config.sentryUrl });

ReactDOM.render(<App />, document.getElementById('root'));
