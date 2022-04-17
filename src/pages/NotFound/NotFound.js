import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/404.png';


const NotFound = () => {
    return (
        <Link to="/NotFound"><img style={{width:"100vh"}} src={img} alt="" /></Link>
    );
};

export default NotFound;