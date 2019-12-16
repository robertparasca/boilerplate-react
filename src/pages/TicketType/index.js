import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Select, Tag } from 'antd';

const { Option } = Select;

class TicketType extends React.Component {

    state = {
        field: undefined,
        ticket: '',
        fields: [],
        r: false
    };

    onChange = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        this.setState({ ticket: value });
    };

    addField = () => {
        this.setState((prevState) => ({
            ticket: prevState.ticket + `{${this.state.field}}`,
            fields: [...prevState.fields, this.state.field],
            field: undefined
        }));
    };

    selectOnChange = (value) => {
        this.setState({ field: value });
    };

    b = (ticketString) => {
        const words = [];
        const replaceWord = 'replaceWord';
        let ticketStringToArr = ticketString.split('');
        let oldIndex = 0;
        this.state.fields.forEach(field => {
            console.log(field);
            let i = ticketString.search('{');
            let finish = ticketString.search('}');
            for (i; i <= finish; i++) {
                ticketStringToArr[i] = replaceWord;

            }
            ticketStringToArr = ticketStringToArr.filter(i => i !== replaceWord);
            ticketString = ticketStringToArr.join('');
            let word = ticketStringToArr.slice(oldIndex, i-1).join('');
            words.push(word);
            oldIndex = finish + 1;
            console.log(ticketString);
            console.log('------------------------');
        });

        return words;
    };

    /**
     * words = ['Domnul ', 'este student în anul ']
     * fields = ['student_name', 'student_year']
     * words.forEach()
     */

    renderTicket() {
        // const a = 'Domnul {student_name} este student al facultății noastre în anul {student_year} ';
        // const b = ['{student_name}', '{student_year}'];
        // let c = a;
        let d = null;
        this.state.fields.forEach(i => {
            // console.log(c.split(i));
            const f = this.state.ticket.split(`{${i}}`);
            console.log(f);
            // console.log(f);
            // d += <span>{f[0]}<Tag color='blue'>{i}</Tag></span>;
            // this.setState({ ticket: f[1] });
            // c = c.split(i)[1];
        });


        // console.log(d)
        return d;
    }

    /**
     * ['Domnul ', 'este student in anul'] hardcoded
     * ['{student_name}', '{student_year}'] dynamic
     * Domnul {student_name} este student in anul {student_year} => in textarea
     */
    render() {
        console.log(this.state.ticket);
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
                { this.state.ticket }
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