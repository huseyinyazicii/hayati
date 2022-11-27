import React, { useState } from 'react';
import { Col, Row } from 'antd';
import './app.css';
import Form from './components/Form';
import CustomTable from './components/CustomTable';

const defaultData = [
    {
        key: '1',
        orderCategory: "sell",
        location: "manisa",
        carBrand: "bmw",
        registrationNumber: 10, 
        year: 1980,
        orderType: "in-store",
        orderTime: "working hours",
    },
    {
        key: '2',
        orderCategory: "buy",
        location: "ankara",
        carBrand: "audi",
        registrationNumber: 10, 
        year: 1990,
        orderType: "e-booking",
        orderTime: "non-working hours",
    }
];

const defaultRow = () => {
    return {
        key: new Date().getTime(),
        orderCategory: null,
        location: null,
        carBrand: null,
        registrationNumber: null, 
        year: null,
        orderType: null,
        orderTime: null,
    }
} 

const App = () => {
    const [data, setData] = useState(defaultData);
    const [formData, setFormData] = useState(defaultRow());
    const [isEdit, setIsEdit] = useState(false);
    const [filteredData, setFilteredData] = useState(null);

    const editData = (column) => {
        setIsEdit(true);
        setFormData(column);
    }

    return (
        <div className='container'>
             <Row style={{justifyContent: "center"}}>
                <Col lg={{ span: 6 }}  style={{marginTop: "20px"}}>
                    <Form data={data} setData={setData} formData={formData} setFilteredData={setFilteredData} setFormData={setFormData} defaultRow={defaultRow} isEdit={isEdit} setIsEdit={setIsEdit} />
                </Col>
                <Col lg={{ span: 17, offset: 1 }} style={{marginTop: "20px", marginBottom: "20px"}}>
                    <CustomTable data={data} setData={setData} editData={editData} filteredData={filteredData} />
                </Col>
            </Row>
        </div>
    )
}

export default App;