import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Icon, Form, Alert } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ReeValidator from 'ree-validate';

import { acceptTicket, rejectTicket } from '../../redux/actions/tickets';

class HandleModal extends React.Component {
    constructor(props) {
        super(props);
        this.reasonReject = 'reject reason';
        this.validator = new ReeValidator({
            [this.reasonReject]: 'required'
        });
        this.state = {
            visible: false,
            [this.reasonReject]: '',
            errors: this.validator.errors
        };
    }

    showModal = () => {
        this.validator.errors.remove(this.reasonReject);
        this.setState({
            visible: true,
        });
    };

    reject = () => {
        this.validator.validateAll(this.state).then((success) => {
            if (success) {
                this.props.rejectTicket(this.props.ticket.id, this.state[this.reasonReject]);
                this.setState({
                    visible: false,
                });
            } else {
                this.setState({
                    errors: this.validator.errors
                });
            }
        });
    };

    accept = () => {
        this.props.acceptTicket(this.props.ticket.id);
        this.setState({
            visible: false,
        });
    };

    handleConfirm = () => {
        if (this.props.reject) {
            this.reject();
        } else {
            this.accept();
        }
    };

    handleCancel = () => {
        this.setState({
            visible: false,
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
        return (
            <>
                <Button
                    type={this.props.reject ? 'danger' : 'primary'}
                    disabled={!!this.props.ticketStatus} onClick={this.showModal}
                >
                    {this.props.reject ? <Icon type='close' /> : <Icon type='check' />}
                </Button>
                <Modal
                    title={this.props.reject ? 'Respinge' : 'Validează'}
                    visible={this.state.visible}
                    onOk={this.handleConfirm}
                    onCancel={this.handleCancel}
                    cancelText='Anulează'
                >
                    {
                        this.props.reject ?
                            <>
                                <p>Vă rog să scrieți motivul pentru care respingeți cererea.</p>
                                <Form>
                                    <Form.Item>
                                        <TextArea
                                            name={this.reasonReject}
                                            placeholder='Motiv'
                                            onChange={this.handleOnChange}
                                            className={this.validator.errors.has(this.reasonReject) ? 'error-border' : null}
                                        />
                                    </Form.Item>
                                    {
                                        this.validator.errors.has(this.reasonReject) ?
                                            <Form.Item>
                                                <Alert type='error' message={this.validator.errors.first(this.reasonReject)} />
                                            </Form.Item>
                                        : null
                                    }
                                </Form>
                            </>
                        :
                            <p>Atenție, după ce apeși "Ok", se va genera adeverința.</p>
                    }
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rejectTicket: (ticketId, rejectReason) => dispatch(rejectTicket(ticketId, rejectReason)),
        acceptTicket: (ticketId) => dispatch(acceptTicket(ticketId))
    };
};

export default connect(null, mapDispatchToProps)(HandleModal);
