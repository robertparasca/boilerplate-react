import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { fetchUsers } from '../../redux/actions/users';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Email',
                dataIndex: 'email'
            },
            // {
            //     title: 'Role',
            //     dataIndex: 'is_student',
            //     render: (value) => <span>{!!value ? 'Student' : 'Administrator'}</span>
            // }
        ];
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <section id='permissions-page'>
                <h1>Users</h1>
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
