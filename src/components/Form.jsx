import React, { useEffect, useState } from 'react';
import { Select, InputNumber, Button, message } from 'antd';

const orderCategoryOptions = [
    { value: 'sell',  label: 'Sell' },
    { value: 'buy',  label: 'Buy' },
]

const locationOptions = [
    { value: 'ankara',  label: 'Ankara' },
    { value: 'manisa',  label: 'Manisa' },
]

const carBrandOptions = [
    { value: 'bmw',  label: 'BMW' },
    { value: 'audi',  label: 'Audi' },
    { value: 'mercedes',  label: 'Mercedes' },
]

const orderTypeOptions = [
    { value: 'e-booking',  label: 'E-Booking' },
    { value: 'in-store',  label: 'In-Store' },
]

const orderTimeOptions = [
    { value: 'working hours',  label: 'Working Hours' },
    { value: 'non-working hours',  label: 'Non-working hours'},
]

const Form = ({data, setData, formData, setFormData, defaultRow, isEdit, setIsEdit, setFilteredData}) => {
    const [messageApi, contextHolder] = message.useMessage();

    const checkProperties = (obj) => {
        for (let key in obj) {
            if (obj[key] == null || obj[key] == "")
                return false;
        }
        return true;
    }

    const onAdd = () => {
        if(isEdit){
            setData(data.map((item) =>  item.key == formData.key ? formData : item));
            setIsEdit(false);
            onClear();
        } else {
            const check = checkProperties(formData);
            if(check){
                setData([...data, formData]);
                onClear();
            } else {
                messageApi.open({ type: 'error', content: 'Inputs can not be empty' });
            }
        }
    }

    const onSearch = () => {
        const result = data.filter(item => {
            if(formData.orderCategory != null){
                const a = item.orderCategory.includes(formData.orderCategory);
                if(!a)
                    return false;
            }
            if(formData.location != null){
                const a = item.location.includes(formData.location);
                if(!a)
                    return false;
            }
            if(formData.carBrand != null){
                const a = item.carBrand.includes(formData.carBrand);
                if(!a)
                    return false;
            }
            if(formData.orderType != null){
                const a = item.orderType.includes(formData.orderType);
                if(!a)
                    return false;
            }
            if(formData.orderTime != null){
                const a = item.orderTime.includes(formData.orderTime);
                if(!a)
                    return false;
            }
            if(formData.registrationNumber != null){
                const a = item.registrationNumber == formData.registrationNumber;
                if(!a)
                    return false;
            }
            if(formData.year != null){
                const a = item.year == formData.year;
                if(!a)
                    return false;
            }
            return true;
        });
        setFilteredData(result)
    }

    const onClear = () => {
        setFormData(defaultRow());
        setFilteredData(null);
    }

    return (
        <div className='form-container'>
            {contextHolder}
            <div className='form-label'>Order Category</div>
            <Select
                value={formData.orderCategory}
                placeholder="Order Category"
                style={{ width: "100%" }}
                onChange={(value) => setFormData({...formData, orderCategory: value})}
                options={orderCategoryOptions}
            />
            <div className='form-label'>Location</div>
            <Select
                value={formData.location}
                placeholder="Location"
                style={{ width: "100%" }}
                onChange={(value) => setFormData({...formData, location: value})}
                options={locationOptions}
            />
            <div className='form-label'>Car Brand</div>
            <Select
                value={formData.carBrand}
                placeholder="Car Brand"
                style={{ width: "100%" }}
                onChange={(value) => setFormData({...formData, carBrand: value})}
                options={carBrandOptions}
            />
            <div className='form-label'>Registration Number</div>
            <InputNumber style={{ width: "100%" }} min={0} value={formData.registrationNumber} onChange={(value) => setFormData({...formData, registrationNumber: value})} />
            <div className='form-label'>Year</div>
            <InputNumber style={{ width: "100%" }} min={1970} max={2022} value={formData.year} onChange={(value) => setFormData({...formData, year: value})} />
            <div className='form-label'>Order Type</div>
            <Select
                value={formData.orderType}
                placeholder="Order Type"
                style={{ width: "100%" }}
                onChange={(value) => setFormData({...formData, orderType: value})}
                options={orderTypeOptions}
            />
            <div className='form-label'>Order Time</div>
            <Select
                value={formData.orderTime}
                placeholder="Order Time"
                style={{ width: "100%" }}
                onChange={(value) => setFormData({...formData, orderTime: value})}
                options={orderTimeOptions}
            />
            <Button style={{backgroundColor:"#2080f0", marginTop: "20px"}} type="primary" block onClick={onAdd} >Submit</Button>
            <Button style={{backgroundColor:"#18a058", marginTop: "20px"}} type="primary" block onClick={onSearch} >Search</Button>
            <Button style={{backgroundColor:"#d03050", marginTop: "20px"}} type="primary" block onClick={onClear} >Clear</Button>
        </div>
    )
}

export default Form;