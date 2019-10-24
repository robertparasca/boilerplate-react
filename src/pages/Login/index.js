import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { Spin } from 'antd';

import { login } from '../../redux/actions/auth';
import { config } from '../../utils/config';
import Logo from '../../components/Logo';
import CustomGoogleButton from './CustomGoogleButton';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            !this.props.isAuthenticated ?
                <section id='login-page'>
                    {
                        !this.props.loading ?
                            <div>
                                <Logo />
                                <GoogleLogin
                                    clientId={config.googleClient}
                                    buttonText="Login"
                                    onSuccess={this.props.login}
                                    onFailure={this.props.login}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <CustomGoogleButton {...renderProps} />
                                    )}
                                />
                            </div>
                        : <Spin />
                    }
                </section>
            : <Redirect to='/' />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        ...store.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (response) => dispatch(login(response))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
