import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Icon } from 'antd';
import ReeValidator from 'ree-validate';

import { login } from '../../redux/actions/auth';
import { LOGIN_HAPPENING } from '../../redux/actions/auth';

const Login = () => {
    const validator = new ReeValidator({
        email: 'required|email'
    });

    // const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        email: '',
        errors: validator.errors
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        validator.validateAll(loginForm).then((success) => {
            console.log(loginForm);
            if (success) {
                login()();
            } else {
                setLoginForm({ ...loginForm, errors: validator.errors });
            }
        })
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        validator.errors.remove(name);
        validator.validate(name, value).then(() => {
            const { errors } = validator;
            setLoginForm({ email: value, errors });
        });
    };

    return (
        <section id='login-page'>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <Input
                        name='email'
                        placeholder='Email'
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={handleOnChange}
                    />
                    {loginForm.errors.items.map((error, index) => (<div key={index}>{error.msg}</div>))}
                </div>
                <div>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </div>
            </form>
        </section>
    );
};

export default Login;
