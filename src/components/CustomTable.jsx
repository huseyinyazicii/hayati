import React from 'react';
import { Space, Table, Button } from 'antd';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const CustomTable = ({data, setData, editData, filteredData}) => {
    const columns = [
        {
            title: 'Order Category',
            dataIndex: 'orderCategory',
            key: 'orderCategory',
            render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
        },
        {
            title: 'Car Brand',
            dataIndex: 'carBrand',
            key: 'carBrand',
            render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
        },
        {
            title: 'Registration Number',
            dataIndex: 'registrationNumber',
            key: 'registrationNumber',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Order Type',
            dataIndex: 'orderType',
            key: 'orderType',
            render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
        },
        {
            title: 'Order Time',
            dataIndex: 'orderTime',
            key: 'orderTime',
            render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Button 
                        style={{backgroundColor:"#f0a01f29", color: "#f0a020"}} 
                        type="primary"
                        onClick={() => editData(record)} 
                    >
                        <AiOutlineEdit />
                    </Button>
                    <Button 
                        style={{backgroundColor:"#d0305029", color: "#d03050"}} 
                        type="primary"
                        onClick={() => onDelete(record.key)} 
                    >
                        <AiOutlineDelete />
                    </Button>
                </Space>
            ),
        },
    ];

    const onDelete = (key) => {
        setData(data.filter(item => item.key != key))
    }

    return (
        <div className='table-container'>
            <Table 
                columns={columns} 
                dataSource={filteredData == null ? data : filteredData} 
            />
        </div>
    )
}

export default CustomTable;