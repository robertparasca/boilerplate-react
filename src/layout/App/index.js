import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from '../../redux/store';
import { history } from '../../redux/store';
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
            <ConnectedRouter history={history}>
                <AppLogic />
                <LayoutContent>
                    <SidebarMenu />
                    <ActualContent>
                        <Routes />
                    </ActualContent>
                </LayoutContent>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
