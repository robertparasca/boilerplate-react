import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

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
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <NavLink exact to="/" activeStyle={this.activeStyle}>
                            <Icon type="pie-chart" />
                            <span>Home</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink exact to="/dashboard" activeStyle={this.activeStyle}>
                            <Icon type="desktop" />
                            <span>Dashboard</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SidebarMenu;
