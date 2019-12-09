import React from 'react';
import { connect } from 'react-redux';
import { Button, Tabs } from 'antd';
import { Link } from 'react-router-dom';

import TicketTypes from '../../components/TicketTypes';
import InstituteDetails from '../../components/InstituteDetails';
import StudentsImport from '../../components/StudentsImport';

const { TabPane } = Tabs;

class Settings extends React.Component {

    callback = (key) => {
        console.log(key);
    };

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
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
                        <h3>Import studenți</h3>
                        <p>De aici o să dăm import la excelul cu studenți la început de an</p>
                        <div className='header'>
                            <StudentsImport customOnDrop={this.onDrop} />
                        </div>
                    </TabPane>
                </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);