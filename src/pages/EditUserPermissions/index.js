import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/editUserPermissions';
import { Spin, Tag } from 'antd';
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
                <h2>Modifici permisiunile pentru utilizatorul <Tag color='blue'>{this.props.editUserPermissions.user.name}</Tag></h2>
                <p>Atenție! Ai grijă ce permisiuni oferi utilizatorilor!</p>
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
