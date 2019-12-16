import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../../redux/actions/students';
import { Table } from 'antd';

class Students extends React.Component {
    columns = [
        {
            title: 'Nume',
            dataIndex: 'nume_si_prenume'
        },
        {
            title: 'Email',
            dataIndex: 'contact_email'
        },
        {
            title: 'Grupa',
            dataIndex: 'grupa_i'
        },
        {
            title: 'Domeniu studii',
            dataIndex: 'domeniu_studii'
        },
        {
            title: 'An de studiu',
            dataIndex: 'an_curent'
        }
    ];

    componentDidMount() {
        this.props.getStudents();
    }

    render() {
        return (
            <section id='students-page'>
                <h2>Studenți</h2>
                <Table rowKey='id' dataSource={this.props.students} columns={this.columns} loading={this.props.loading} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.students
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => dispatch(fetchStudents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);