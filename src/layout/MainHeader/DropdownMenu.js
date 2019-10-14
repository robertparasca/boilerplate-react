import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to='/my-profile'>My profile</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );
};

export default DropdownMenu;
