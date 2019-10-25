import React from 'react';
import { connect } from 'react-redux';
import { Input, Form, Button, Spin, Alert, Result } from 'antd';
import ReeValidator from 'ree-validate';
import { createTicker, RESET_TICKET_STATE } from '../../redux/actions/ticket';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

class NewTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new ReeValidator({
            reason: 'required'
        });
        this.state = {
            reason: '',
            errors: this.validator.errors
        };
    }

    componentDidMount = () => {
        this.props.resetState();
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.validator.validateAll(this.state).then((success) => {
            if (success) {
                this.props.send(this.state.reason);
            } else {
                this.setState({
                    errors: this.validator.errors,
                });
            }
        });
    };

    onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.validator.errors.remove(name);
        this.validator.validate(name, value).then(() => {
            const { errors } = this.validator;
            this.setState({
                reason: value,
                errors
            });
        });
    };

    render() {
        if (this.props.loading) {
            return <Spin/>;
        }
        if (this.props.finished) {
            return (
                <Result
                    status='success'
                    title={`Cererea ta cu ID ${this.props.ticket.id} a fost trimisă.`}
                    extra={[
                        <Button type='primary' key='tickets'>
                            <Link to='/tickets'>Mergi înapoi pe pagina de adeverințe.</Link>
                        </Button>,
                        <Button key='dashboard'>
                            <Link to='/'>Mergi înapoi pe dashboard.</Link>
                        </Button>
                    ]}
                />
            )
        }
        return (
            <section>
                <Form onSubmit={this.onSubmitHandler}>
                    <Form.Item>
                        <TextArea
                            placeholder='Motiv'
                            name='reason'
                            className={this.validator.errors.has('reason') ? 'error-border' : null}
                            onChange={this.onChangeHandler}
                        />
                    </Form.Item>
                        {
                            this.validator.errors.has('reason') ?
                                <Form.Item>
                                    <Alert type='error' message={this.validator.errors.first('reason')} />
                                </Form.Item>
                            : null
                        }
                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='submit-form'>
                            Trimite
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.ticket
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        send: (reason) => dispatch(createTicker(reason)),
        resetState: () => dispatch({ type: RESET_TICKET_STATE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTicketForm);