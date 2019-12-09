import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Table } from 'antd';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../../redux/actions/users';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Nume',
                dataIndex: 'name'
            },
            {
                title: 'Email',
                dataIndex: 'email'
            },
            {
                title: 'Modifică permisiuni',
                key: 'edit_permissions',
                render: (value, row) => <Link to={`/users/${row.id}`}><Button type='primary'><Icon type='check' /></Button></Link>,
            }
        ];
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <section id='permissions-page'>
                <h2>Utilizatori</h2>
                <Table rowKey='id' dataSource={this.props.users} columns={this.columns} loading={this.props.loading} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
