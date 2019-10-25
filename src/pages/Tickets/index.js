import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import TicketsTable from '../../components/TicketsTable';

const Dashboard = () => {
    return (
        <section id='tickets-page'>
            <div className='header'>
                <h2>Cereri adeverințe</h2>
                <Button type="primary"><Link to='/tickets/new'>Depune cerere</Link></Button>
            </div>
            <TicketsTable />
        </section>
    );
  };

export default Dashboard;
