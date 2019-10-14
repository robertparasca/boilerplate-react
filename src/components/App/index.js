import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../redux/store';
import Routes from '../../layout/Routes';

import LayoutContent from '../../layout/LayoutContainer';
import SidebarMenu from '../../layout/SidebarMenu';
import ActualContent from '../../layout/ActualContent';

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
