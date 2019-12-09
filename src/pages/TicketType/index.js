import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Select, Tag } from 'antd';

const { Option } = Select;

class TicketType extends React.Component {

    state = {
        field: undefined,
        ticket: '',
        fields: []
    };

    onChange = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        this.setState({
            ticket: value
        });
    };

    addField = () => {
        this.setState((prevState) => {
            return {
                ticket: prevState.ticket + `{${this.state.field}}`,
                fields: [...prevState.fields, this.state.field],
                field: undefined
            };
        });
    };

    selectOnChange = (value) => {
        this.setState({ field: value });
    };

    /**
     * ['Domnul ', 'este student in anul'] hardcoded
     * ['{student_name}', '{student_year}'] dynamic
     * Domnul {student_name} este student in anul {student_year} => in textarea
     */
    render() {
        return (
            <section id='ticket-type-page'>
                <h3>Ticket type form to be render</h3>
                <div>
                    <Select placeholder='Câmp' value={this.state.field} onChange={this.selectOnChange} style={{width: '300px'}}>
                        <Option value='student_name'>Numele studentului</Option>
                        <Option value='student_year'>Anul de studii</Option>
                    </Select>
                    <Button type='primary' onClick={this.addField}>Add field</Button>
                </div>
                <form noValidate>
                    <Input.TextArea
                        rows={4}
                        onChange={this.onChange}
                        disabled={this.state.disabled}
                        value={this.state.ticket}
                    />
                </form>
                <h3>Live preview</h3>
                {/*{ this.state.ticket }*/}
                <div contentEditable>

                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketType);