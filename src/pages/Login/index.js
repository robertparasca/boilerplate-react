import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { Spin } from 'antd';

import { login } from '../../redux/actions/auth';
import { config } from '../../utils/config';
import Logo from '../../components/Logo';
import CustomGoogleButton from './CustomGoogleButton';
import Errors from '../../components/Errors';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <section id='login-page'>
                {
                    !this.props.loading ?
                        <div className='form-and-logo'>
                            <Logo />
                            <GoogleLogin
                                clientId={config.googleClient}
                                onSuccess={this.props.login}
                                onFailure={this.props.login}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <CustomGoogleButton {...renderProps} />
                                )}
                            />
                            <Errors errors={this.props.errors} />
                        </div>
                    : <Spin />
                }
            </section>
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
