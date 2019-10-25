import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { fetchTickets } from '../../redux/actions/tickets';

class TicketsTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Data',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Motiv',
                dataIndex: 'reason',
                key: 'reason',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            }
        ];
    }

    componentDidMount = () => {
        this.props.getTickets();
    };

    render() {
        return (
            <Table dataSource={this.props.tickets} columns={this.columns} loading={this.props.loading} />
        );
    }
}

const mapPropsToState = (state) => {
    return {
        ...state.tickets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(fetchTickets())
    };
};

export default connect(mapPropsToState, mapDispatchToProps)(TicketsTable);