import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../redux/store';
import Routes from '../Routes';

import LayoutContent from '../LayoutContainer';
import SidebarMenu from '../SidebarMenu';
import ActualContent from '../ActualContent';
import { getToken, tokenExists } from '../../utils/auth';
import { setToken } from '../../utils/axios';
import AppLogic from '../AppLogic';

const App = () => {
    if (tokenExists()) {
        setToken(getToken());
    }
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppLogic />
                <LayoutContent>
                    <SidebarMenu />
                    <ActualContent>
                        <Routes />
                    </ActualContent>
                </LayoutContent>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
