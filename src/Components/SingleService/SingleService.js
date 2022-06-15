import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
    const{_id,name,img,price,description} = service;
    const navigate = useNavigate()
    const handleServiceDetails =(id)=> {
        navigate(`/service/${id}`)
    }
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() =>handleServiceDetails(_id)}>Book {name}</button>
        </div>
    );
};

export default SingleService;