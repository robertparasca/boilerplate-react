import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import Routes from '../../setup/Routes';
import SiderDemo from '../../layout/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <SiderDemo />
    </Provider>
  );
}

export default App;
