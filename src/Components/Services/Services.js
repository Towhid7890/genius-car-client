import useService from '../hooks/useService';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useService();
    
    return (
        <div id="services">
            <h1 className="services-title">Our Services</h1>
           <div className="services-container">
           {
                services.map(service =><SingleService service={service} key={service._id}></SingleService>)
            }
           </div>
        </div>
    );
};

export default Services;