import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,price,img,description,id}=service
    const navigate = useNavigate()

    
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>
                Price: {price}
            </p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigate(`/service/${id}`)} className='btn btn-primary p-2'>{name}</button>
        </div>
    );
};

export default Service;