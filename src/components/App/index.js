import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../../redux/store';
import Home from '../Home';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} exact />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
