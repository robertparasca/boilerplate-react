import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';

const { Header } = Layout;

const MainHeader = () => {
    const dispatch = useDispatch();
    return (
        <Header
            style={{ background: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            <Dropdown overlay={
                <Menu>
                    <Menu.Item key="0">
                        <Link to='/my-profile'>My profile</Link>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="2" onClick={() => dispatch(logout())}>Logout</Menu.Item>
                </Menu>
            } trigger={['click']}>
                <Avatar icon="user" style={{ cursor: 'pointer' }} />
            </Dropdown>
        </Header>
    );
};

export default MainHeader;
