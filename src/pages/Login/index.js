import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Spin } from 'antd';
import { Redirect } from 'react-router-dom';
import ReeValidator from 'ree-validate';
import GoogleLogin from 'react-google-login';

import { login } from '../../redux/actions/auth';
import { config } from '../../utils/config';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new ReeValidator({
            // email: 'required|email'
            email: ''
        });
        this.state = {
            email: '',
            errors: this.validator.errors
        };
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.validator.validateAll(this.state).then((success) => {
            if (success) {
                this.props.login(this.state.email);
            } else {
                this.setState({
                    errors: this.validator.errors
                });
            }
        })
    };

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.validator.errors.remove(name);
        this.validator.validate(name, value).then(() => {
            const { errors } = this.validator;
            this.setState({
                email: value,
                errors
            });
        });
    };

    responseGoogle = (response) => {
        console.log(response);
    };

    render() {
        return (
            !this.props.isAuthenticated ?
                <section id='login-page'>
                    {
                        !this.props.loading ?
                            <div>
                                <form onSubmit={this.handleOnSubmit}>
                                <div>
                                    <Input
                                        name='email'
                                        placeholder='Email'
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.handleOnChange}
                                    />
                                    <div>{this.validator.errors.has('email') ? this.validator.errors.first('email') : null}</div>
                                </div>
                                <div>
                                    <Button type='primary' htmlType='submit'>Login</Button>
                                </div>
                            </form>
                            <GoogleLogin
                                clientId={config.googleClient}
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
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
        login: (email) => dispatch(login(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
