import React from 'react';
import Rocket from '../images/rocket5.gif';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <p>Hi! I'm Matheus</p>
            <img src={Rocket} className="Image" alt="logo" />
        </div>
    ); 
}

export default Landing;