import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Icon, Input, Spin, Form, Alert } from 'antd';
import ReeValidator from 'ree-validate';

import { loginWithPassword, resetState } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import Errors from '../../components/Errors';

class LoginWithPassword extends React.Component {
    constructor(props) {
        super(props);
        // todo: change this
        this.validator = new ReeValidator({
            email: 'required',
            password: 'required'
        });
        this.state = {
            email: '',
            password: '',
            errors: this.validator.errors
        };
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.validator.validateAll(this.state).then((success) => {
            if (success) {
                this.props.login(this.state.email, this.state.password);
            } else {
                this.setState({
                    errors: this.validator.errors
                });
            }
        });
    };

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.validator.errors.remove(name);
        this.validator.validate(name, value).then(() => {
            const { errors } = this.validator;
            this.setState({
                [name]: value,
                errors
            });
        });
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <section id='login-with-password-page'>
                {
                    !this.props.loading ?
                        <div>
                            <Logo />
                            <Form onSubmit={this.handleOnSubmit}>
                                <Form.Item>
                                    <Input
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.handleOnChange}
                                        className={this.validator.errors.has('reason') ? 'error-border' : null}
                                    />
                                </Form.Item>
                                {
                                    this.validator.errors.has('email') ?
                                        <Form.Item>
                                            <Alert type='error' message={this.validator.errors.first('email')} />
                                        </Form.Item>
                                    : null
                                }
                                <Form.Item>
                                    <Input
                                        name='password'
                                        placeholder='Password'
                                        type='password'
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.handleOnChange}
                                    />
                                </Form.Item>
                                {
                                    this.validator.errors.has('password') ?
                                        <Form.Item>
                                            <Alert type='error' message={this.validator.errors.first('password')} />
                                        </Form.Item>
                                    : null
                                }
                                <div>
                                    <Button type='primary' htmlType='submit'>Login</Button>
                                </div>
                            </Form>
                            <Errors errors={this.props.errors} />
                            <div style={{ textAlign: 'center' }}>
                                <Link to='/login' onClick={this.props.resetState}>Or login with your Google account</Link>
                            </div>
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
        login: (email, password) => dispatch(loginWithPassword(email, password)),
        resetState: () => dispatch(resetState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithPassword);
