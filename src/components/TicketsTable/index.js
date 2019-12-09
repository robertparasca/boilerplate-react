import React from 'react';
import { connect } from 'react-redux';
import { Table} from 'antd';

import { fetchTickets } from '../../redux/actions/tickets';
import { hasPermissions } from '../../utils/permissions';
import HandleModal from './HandleModal';

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
        this.validatePermissions = ['TicketController_validate'];
    }

    componentDidMount = () => {
        this.props.getTickets();
        if (hasPermissions(this.props.auth.permissions, this.validatePermissions)) {
            this.columns.push({
                title: 'Validează',
                dataIndex: 'status',
                key: 'validate',
                render: (value, row) => <HandleModal ticket={row} ticketStatus={value} />,
            });
            this.columns.push({
                title: 'Respinge',
                dataIndex: 'status',
                key: 'reject',
                render: (value, row) => <HandleModal ticket={row} ticketStatus={value} reject={true} />,
            });
        }
    };

    render() {
        return (
            <Table dataSource={this.props.tickets} columns={this.columns} loading={this.props.loading} />
        );
    }
}

const mapPropsToState = (state) => {
    return {
        ...state.tickets,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(fetchTickets())
    };
};

export default connect(mapPropsToState, mapDispatchToProps)(TicketsTable);