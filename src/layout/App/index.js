import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../redux/store';
import Routes from '../Routes';

import LayoutContent from '../LayoutContainer';
import SidebarMenu from '../SidebarMenu';
import ActualContent from '../ActualContent';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LayoutContent>
                    <SidebarMenu />
                    <ActualContent>
                        <Routes />
                    </ActualContent>
                </LayoutContent>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
