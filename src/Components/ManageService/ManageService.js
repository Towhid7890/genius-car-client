import React from 'react';
import useService from '../hooks/useService';

const ManageService = () => {
    const[services, setServices]=useService();
    const handleManage=(id) => {
        const proceed = window.confirm("Are your sure to delete");
        if(proceed){
            console.log("id is ", id);
            const url =`http://localhost:5000/services/${id}`
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    console.log('successfully')
                    const remaining = services.filter(user => user._id !== id);
                    setServices(remaining)
                  }
            })
    }
}
    return (
        <div className="w-50 mx-auto">
            <h2>Manage your service from here</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() =>handleManage(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;