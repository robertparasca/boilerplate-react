import React from 'react';
import { Alert } from 'antd';

const Errors = ({ errors }) => {
    return (
        <section id='errors'>
            { errors.map((error, index) => (<Alert key={index} message={error} type="error" showIcon />)) }
        </section>
    );
};

export default Errors;
