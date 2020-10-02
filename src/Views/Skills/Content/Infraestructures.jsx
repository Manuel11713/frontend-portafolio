import React from 'react';

import './Infraestructures.scss';

const Infraestrutures = () =>{
    return(
        <div id="inf-container">
            <h2>Infraestrutures</h2>
            <div className="inf">
                <div>
                    <h3>AWS</h3>
                    <img  src="/images/icons/aws.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Digital Ocean</h3>
                    <img  src="/images/icons/digoce.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Heroku</h3>
                    <img  src="/images/icons/heroku.jpg" alt="fl-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Infraestrutures;