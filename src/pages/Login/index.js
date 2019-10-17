import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Spin } from 'antd';
import { Redirect } from 'react-router-dom';
import ReeValidator from 'ree-validate';

import { login } from '../../redux/actions/auth';

class Login extends React.Component {
    constructor() {
        super();
        this.validator = new ReeValidator({
            email: 'required|email'
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

    render() {
        return (
            !this.props.isAuthenticated ?
                <section id='login-page'>
                    {
                        !this.props.loading ?
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
                        : <Spin />
                    }
                </section>
            : <Redirect to='/' />
        );
    }
};

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
