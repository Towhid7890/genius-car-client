import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
     const url = `http://localhost:5000/services/${serviceId}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setService(data))
    }, [])
    
    
    return (
        <div className="text-center">
            <h2>You want to book {service.name}</h2>
            <button className="bg-info btn">Proceed CheckOut</button>
        </div>
    );
};

export default ServiceDetails;