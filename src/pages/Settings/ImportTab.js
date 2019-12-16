import React from 'react';
import { useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';

import StudentsImport from '../../components/StudentsImport';

const ImportTab = ({ onDrop }) => {
    const importState = useSelector((state) => state.settings);
    if (importState.import.loading) {
        return <Spin />;
    }

    return (
        <>
            <h3>Import studenți</h3>
            <p>De aici o să dăm import la excelul cu studenți la început de an</p>
            <div className='header'>
                <StudentsImport customOnDrop={onDrop} />
            </div>
            {
                importState.import.uploadSuccess ?
                    <Alert
                        message='Import realizat cu success'
                        description='Datele au fost salvate cu succes..'
                        type='success'
                        showIcon
                    />
                : null
            }
        </>
    )
};

export default ImportTab;
