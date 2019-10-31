import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, notification } from 'antd';
import { hasPermissions } from '../../utils/permissions';
import { changePermission } from '../../redux/actions/editUser';

const successNotification = () => {
    notification.open({
        message: 'Permissions updated successfully',
        description: 'We managed to change the permissions.'
    });
};

const failNotification = () => {
    notification.open({
        message: 'Permissions could not be updated',
        description: 'It looks like we screwed things up. Sorry :('
    });
};

class PermissionCheckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        checked: false
    };

    componentDidMount() {
        this.setState({
            checked: hasPermissions(this.props.userPermissions, [this.props.permission.name])
        });
    }

    // if (this.props.changePermissionSuccess) {
    //     this.setState((oldState) => ({
    //         ...oldState,
    //         checked: !oldState.checked
    //     }));
    //     successNotification();
    //     this.props.checkboxChange();
    // }
    // if (this.props.changePermissionFail) {
    //     failNotification();
    // }

    handleOnChange = () => {
        this.props.changePermissions(this.props.user.id, this.props.permission.id, !this.state.checked);
        this.setState((oldState) => ({
            ...oldState,
            checked: !oldState.checked
        }));
        successNotification();
    };

    render() {
        return (
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleOnChange}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.editUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePermissions: (userId, permissionId, state) => dispatch(changePermission(userId, permissionId, state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermissionCheckbox);
