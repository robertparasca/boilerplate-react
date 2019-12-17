import React from 'react';
import { connect } from 'react-redux';
import { Alert, Button, Form, Icon, Input, Spin } from 'antd';
import ReeValidator from 'ree-validate';

import { updateInstituteData, fetchInstituteData } from '../../redux/actions/settings';
import fields from './fields';

class InstituteForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = fields;

        this.validator = new ReeValidator({
            [this.fields.dean_name.name]: 'required',
            [this.fields.chief_secretary.name]: 'required',
            [this.fields.active_year.name]: 'required',
            [this.fields.active_semester.name]: 'required'
        });
        this.state = {
            form: {
                [this.fields.dean_name.name]: '',
                [this.fields.chief_secretary.name]: '',
                [this.fields.active_year.name]: '',
                [this.fields.active_semester.name]: ''
            },
            errors: this.validator.errors
        };
    }

    componentDidMount = () => {
        this.props.getInstituteData();
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.institute.data !== this.props.institute.data) {
            this.setState((prevState) => ({
                ...prevState,
                form: {
                    [this.fields.dean_name.name]: this.props.institute.data[this.fields.dean_name.slug],
                    [this.fields.chief_secretary.name]: this.props.institute.data[this.fields.chief_secretary.slug],
                    [this.fields.active_year.name]: this.props.institute.data[this.fields.active_year.slug],
                    [this.fields.active_semester.name]: this.props.institute.data[this.fields.active_semester.slug],
                }
            }));
        }
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.validator.validateAll(this.state).then((success) => {
            if (success) {
                console.log(this.state.form);
                // todo: uncomment the line below; delete the one above
                // this.props.updateInstituteData(this.state.form);
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
            this.setState((prevState) => ({
                form: {
                    ...prevState.form,
                    [name]: value
                },
                errors
            }));
        });
    };

    render() {
        if (this.props.institute.loading) {
            return <Spin id='layout-inner-content-spinner' />
        }
        return (
            <section id='institute-form-page'>
                <h3>Form pentru a modifica informațiile</h3>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Item>
                        <Input
                            name={this.fields.dean_name.name}
                            placeholder={this.fields.dean_name.name}
                            type='text'
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.handleOnChange}
                            value={this.state.form[this.fields.dean_name.name]}
                            className={this.validator.errors.has(this.fields.dean_name.name) ? 'error-border' : null}
                        />
                    </Form.Item>
                    {
                        this.validator.errors.has(this.fields.dean_name.name) ?
                            <Form.Item>
                                <Alert type='error' message={this.validator.errors.first(this.fields.dean_name.name)} />
                            </Form.Item>
                        : null
                    }
                    <Form.Item>
                        <Input
                            name={this.fields.chief_secretary.name}
                            placeholder={this.fields.chief_secretary.name}
                            type='text'
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.handleOnChange}
                            value={this.state.form[this.fields.chief_secretary.name]}
                            className={this.validator.errors.has(this.fields.chief_secretary.name) ? 'error-border' : null}
                        />
                    </Form.Item>
                    {
                        this.validator.errors.has(this.fields.chief_secretary.name) ?
                            <Form.Item>
                                <Alert type='error' message={this.validator.errors.first(this.fields.chief_secretary.name)} />
                            </Form.Item>
                        : null
                    }
                    <Form.Item>
                        <Input
                            name={this.fields.active_year.name}
                            placeholder={this.fields.active_year.name}
                            type='text'
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.handleOnChange}
                            value={this.state.form[this.fields.active_year.name]}
                            className={this.validator.errors.has(this.fields.active_year.name) ? 'error-border' : null}
                        />
                    </Form.Item>
                    {
                        this.validator.errors.has(this.fields.active_year.name) ?
                            <Form.Item>
                                <Alert type='error' message={this.validator.errors.first(this.fields.active_year.name)} />
                            </Form.Item>
                        : null
                    }
                    <Form.Item>
                        <Input
                            name={this.fields.active_semester.name}
                            placeholder={this.fields.active_semester.name}
                            type='text'
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.handleOnChange}
                            value={this.state.form[this.fields.active_semester.name]}
                            className={this.validator.errors.has(this.fields.active_semester.name) ? 'error-border' : null}
                        />
                    </Form.Item>
                    {
                        this.validator.errors.has(this.fields.active_semester.name) ?
                            <Form.Item>
                                <Alert type='error' message={this.validator.errors.first(this.fields.active_semester.name)} />
                            </Form.Item>
                            : null
                    }
                    <div>
                        <Button type='primary' htmlType='submit'>Salvează</Button>
                    </div>
                </Form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.settings
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateInstituteData: () => dispatch(updateInstituteData()),
        getInstituteData: () => dispatch(fetchInstituteData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstituteForm);