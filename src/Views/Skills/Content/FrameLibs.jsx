import React from 'react';

import './FrameLibs.scss';

const FrameLibs = () =>{
    return(
        <div id="FL-container">
            <h2>Frameworks and libraries</h2>
            <div className="fl">
                <div>
                    <h3>React</h3>
                    <img  src="/images/icons/react.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Redux</h3>
                    <img  src="/images/icons/redux.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Express</h3>
                    <img  src="/images/icons/express.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Mocha and Chai</h3>
                    <img  src="/images/icons/mocha.png" alt="fl-icon"/>
                </div>
            </div>

            <div className="fl">
                <div>
                    <h3>Socket.io</h3>
                    <img  src="/images/icons/soketio.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Django</h3>
                    <h3>Axios</h3>
                    <h3>Numpy</h3>
                    <h3>Pytorch</h3>
                </div>
                
            </div>

        </div>
    );
}

export default FrameLibs;