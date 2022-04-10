import React from 'react';

const Service = ({service}) => {
    const {name,price,img,description}=service
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>
                Price: {price}
            </p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;