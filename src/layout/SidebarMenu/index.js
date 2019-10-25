import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from './routes';

const { Sider } = Layout;

class SidebarMenu extends Component {
    state = {
        collapsed: false,
    };

    activeStyle = {
        color: "#fff"
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render() {
        return (
            this.props.auth.isAuthenticated ?
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className='logo' />
                <Menu theme='dark' defaultSelectedKeys={[this.props.router.location.pathname]} mode='inline'>
                    {routes.map((route) => {
                        return (
                            <Menu.Item key={route.key}>
                                <NavLink exact={route.exact} to={route.path} activeStyle={this.activeStyle}>
                                    <Icon type={route.icon} />
                                    <span>{route.name}</span>
                                </NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            : null
        );
    }
}

const mapPropsToState = (store) => {
    return {
        auth: store.auth,
        router: store.router
    };
};

export default connect(mapPropsToState)(SidebarMenu);
