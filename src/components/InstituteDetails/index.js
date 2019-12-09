import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Spin } from 'antd';

import { fetchInstituteData } from '../../redux/actions/settings';

class InstituteDetails extends React.Component {

    componentDidMount() {
        this.props.getInstituteData();
    }

    render() {
        if (this.loading) {
            return <Spin />
        }
        return (
            <section>
                <h3>Setările pentru facultate</h3>
                <p>Aici o să setăm anul de studii activ care o să apară pe adeverințe</p>
                <div className='header'>
                    <Button type='primary'><Link to='/settings/institute/edit'>Modifică informațiile</Link></Button>
                </div>
                <ul>
                    <li>Universitatea: {this.props.institute.university_name}</li>
                    <li>Facultatea: {this.props.institute.faculty_name}</li>
                    <li>An de studiu activ: {this.props.institute.active_year}</li>
                    <li>Decan: {this.props.institute.dean_name}</li>
                    <li>Secretar șef: {this.props.institute.chief_secretary}</li>
                </ul>
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
        getInstituteData: () => dispatch(fetchInstituteData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstituteDetails);