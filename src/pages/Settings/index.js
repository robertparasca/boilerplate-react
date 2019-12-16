import React from 'react';
import { connect } from 'react-redux';
import { Button, Tabs } from 'antd';
import { Link } from 'react-router-dom';

import TicketTypes from '../../components/TicketTypes';
import InstituteDetails from '../../components/InstituteDetails';
import { RESET_UPLOAD_STATE, uploadStudentsFile } from '../../redux/actions/settings';
import ImportTab from './ImportTab';

const { TabPane } = Tabs;

class Settings extends React.Component {

    callback = (key) => {
        if (key == 3) {
            this.props.resetUploadState();
        }
    };

    onDrop = (acceptedFiles, chosenYear) => {
        this.props.uploadExcel(acceptedFiles[0], chosenYear);
    };

    render() {
        return (
            <section id='settings-page'>
                <Tabs defaultActiveKey='1' onChange={this.callback}>
                    <TabPane tab='Facultate' key='1' className='institute'>
                        <InstituteDetails />
                    </TabPane>
                    <TabPane tab='Tipuri de adeverințe' key='2' className='ticket-types'>
                        <div className='header'>
                            <Button type='primary'><Link to='/settings/tickets/new'>Adaugă tip</Link></Button>
                        </div>
                        <TicketTypes />
                    </TabPane>
                    <TabPane tab='Import studenți' key='3' className='import-students'>
                        <ImportTab onDrop={this.onDrop} />
                    </TabPane>
                </Tabs>
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
        uploadExcel: (file, year) => dispatch(uploadStudentsFile(file, year)),
        resetUploadState: () => dispatch({ type: RESET_UPLOAD_STATE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);