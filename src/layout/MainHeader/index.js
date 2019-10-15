import React from 'react';
import { Layout, Avatar, Dropdown } from 'antd';
import { useSelector } from 'react-redux';

import DropdownMenu from './DropdownMenu';

const { Header } = Layout;

const MainHeader = () => {
    const authState = useSelector((state) => state.auth);
    console.log(authState);
    return (
        authState.isAuthenticated ?
        <Header
            style={{ background: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            <Dropdown overlay={DropdownMenu} trigger={['click']}>
                <Avatar icon="user" style={{ cursor: 'pointer' }} />
            </Dropdown>
        </Header>
        : null
    );
};

export default MainHeader;
