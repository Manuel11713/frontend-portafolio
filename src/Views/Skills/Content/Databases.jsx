import React from 'react';

import './Databases.scss';

const Databases = () =>{
    return(
        <div id="db-container">
            <h2>Databases</h2>
            <div className="dbs">
                <div>
                    <h3>MySQL</h3>
                    <img  src="/images/icons/react.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>MongoDB</h3>
                    <img  src="/images/icons/mongo.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>PosgreSQL</h3>
                    <img  src="/images/icons/postgre.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>DynamoDB</h3>
                    <img  src="/images/icons/dynamo.png" alt="fl-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Databases;