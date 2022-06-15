import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts=[
        {id:1,name:"William Smith",img:expert1},
        {id:2,name:"Handon jamme",img:expert2},
        {id:3,name:"Brayne Drauen",img:expert3},
        {id:4,name:"Thohidul Bijoy",img:expert4},
        {id:5,name:"Sayeed Juel",img:expert5},
        {id:6,name:"William Smith",img:expert6},
    ]
    return (
        <div >
            <h2 className='text-center text-primary'>Meet Our Expert</h2>
          <div className="services-container">
          {
                experts.map(expert =><Expert
                expert={expert} key={expert.id}
                ></Expert>)
            }
          </div>
        </div>
    );
};

export default Experts;