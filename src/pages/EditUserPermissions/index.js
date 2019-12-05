import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/editUserPermissions';
import { Spin } from 'antd';
import PermissionsTable from './PermissionsTable';

class EditUserPermissions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    /**
     * refreshNeeded = if the user changes the permissions for himself, we should refresh the page.
     * refresh the page = make the /me api call. after that, the check if the user is still allowed to be on that page,
     * or whatever is done automatically.
     */
    render() {
        if (this.props.editUserPermissions.loading || this.props.editUserPermissions.user === null) {
            return <Spin id='layout-inner-content-spinner' />;
        }
        return (
            <section>
                <h2>Edit {this.props.editUserPermissions.user.name}</h2>
                <p>From here, you can edit the user permissions. Please be careful when changing the permissions.</p>
                <PermissionsTable
                    userPermissions={this.props.editUserPermissions.user.permissions}
                    refreshNeeded={this.props.user.id === parseInt(this.props.match.params.id, 10)}
                />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.router,
        ...state.auth,
        editUserPermissions: state.editUserPermissions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPermissions);
