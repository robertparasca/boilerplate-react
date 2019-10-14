import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import TicketsTable from '../../components/TicketsTable';

const Dashboard = () => {
    return (
        <div>
            <h1>Cereri adeverințe</h1>
            <Button type="primary"><Link to='/tickets/new'>Depune cerere</Link></Button>
            <TicketsTable />
        </div>
    );
  };

export default Dashboard;
