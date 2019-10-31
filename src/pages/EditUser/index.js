import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/editUser';
import { Spin } from 'antd';
import PermissionsTable from './PermissionsTable';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        if (this.props.editUser.loading || this.props.editUser.user === null) {
            return <Spin id='layout-inner-content-spinner' />;
        }
        return (
            <section>
                <h2>Edit {this.props.editUser.user.name}</h2>
                <p>From here, you can edit the user permissions. Please be careful when changing the permissions.</p>
                <PermissionsTable userPermissions={this.props.editUser.user.permissions} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.router,
        editUser: state.editUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
