import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'antd';

const StudentsImport = ({ customOnDrop }) => {
    const onDrop = useCallback((acceptedFiles) => {
        customOnDrop(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button type='primary' icon='cloud'>Import studenți</Button>
        </div>
    )
};

export default StudentsImport;