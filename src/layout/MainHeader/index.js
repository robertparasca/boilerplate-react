import React from 'react';
import { Layout, Avatar, Dropdown } from 'antd';

import DropdownMenu from './DropdownMenu';

const { Header } = Layout;

const MainHeader = () => {
    return (
        <Header
            style={{ background: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            <Dropdown overlay={DropdownMenu} trigger={['click']}>
                <Avatar icon="user" style={{ cursor: 'pointer' }} />
            </Dropdown>
        </Header>
    );
};

export default MainHeader;
