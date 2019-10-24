import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';

const { Header } = Layout;

const MainHeader = () => {
    const authState = useSelector((state) => state.auth);
    const name = authState.user ? authState.user.name : '';
    const dispatch = useDispatch();
    return (
        <Header
            id='main-header'
            style={{ background: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            <Dropdown overlay={
                <Menu>
                    <Menu.Item key="0">
                        <Link to='/my-profile'>My profile {name}</Link>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="2" onClick={() => dispatch(logout())}>Logout</Menu.Item>
                </Menu>
            } trigger={['click']}>
                <img src={authState.user.image_url} />
            </Dropdown>
        </Header>
    );
};

export default MainHeader;
