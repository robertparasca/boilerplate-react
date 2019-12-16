import React from 'react';
import { connect } from 'react-redux';

import { me } from '../../redux/actions/auth';

class AppLogic extends React.Component {
    componentDidMount() {
        if (this.props.isAuthenticated && this.props.user === null) {
            this.props.me();
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        me: () => dispatch(me())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLogic);
