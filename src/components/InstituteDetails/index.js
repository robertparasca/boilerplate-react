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
        if (this.props.loading) {
            return <Spin id='layout-inner-content-spinner' />
        }
        if (!this.props.institute) {

        }
        return (
            <section>
                <h3>Setările pentru facultate</h3>
                <p>Aici o să setăm anul de studii activ care o să apară pe adeverințe</p>
                <div className='header'>
                    <Button type='primary'><Link to='/settings/institute/edit'>Modifică informațiile</Link></Button>
                </div>
                {
                    !this.props.institute.data ?
                        <div>Datele nu au fost setate</div> :
                    <ul>
                        <li>Universitatea: {this.props.institute.data.university_name}</li>
                        <li>Facultatea: {this.props.institute.data.faculty_name}</li>
                        <li>An de studiu activ: {this.props.institute.data.active_year}</li>
                        <li>Semestru activ: {this.props.institute.data.active_semester}</li>
                        <li>Decan: {this.props.institute.data.dean_name}</li>
                        <li>Secretar șef: {this.props.institute.data.chief_secretary}</li>
                    </ul>
                }
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