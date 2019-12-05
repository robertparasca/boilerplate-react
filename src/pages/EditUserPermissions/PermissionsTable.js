import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { fetchPermissions } from '../../redux/actions/permissions';
import PermissionCheckbox from './PermissionCheckbox';

class PermissionsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPermissions();
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Status',
                key: 'status',
                render: (value, row) => (
                    <PermissionCheckbox
                        permission={row}
                        userPermissions={this.props.userPermissions}
                        checkboxChange={this.checkboxChange}
                        refreshNeeded={this.props.refreshNeeded}
                    />
                ),
            }
        ];
    }

    checkboxChange = () => {
        this.props.fetchPermissions();
    };

    render() {
        return (
            <section>
                <Table
                    rowKey='id'
                    dataSource={this.props.permissions}
                    columns={this.columns}
                    loading={this.props.loading}
                />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.permissions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPermissions: () => dispatch(fetchPermissions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsTable);
