import React from 'react';

import { Input, Form, Button } from 'antd';

const { TextArea } = Input;

const NewTicketForm = ({ form }) => {
    const { getFieldDecorator } = form;

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Item>
                {getFieldDecorator('reason', {
                    rules: [{ required: true, message: 'Te rog introdu motivul pentru care ai nevoie de această adeverință.' }],
                })(
                    <TextArea placeholder="Motiv" />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Trimite
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form.create({ name: 'new_ticket' })(NewTicketForm);