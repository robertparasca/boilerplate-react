import React from 'react';
import { Button, Icon, Input } from 'antd';
import ReeValidator from 'ree-validate';
import { loginWithPassword } from '../../redux/actions/auth';
import { connect } from 'react-redux';


class LoginWithPassword extends React.Component {
    constructor(props) {
        super(props);
        // todo: change this
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
        });
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
        login: (response) => dispatch(loginWithPassword(response))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithPassword);
