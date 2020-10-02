import React from 'react';
import {connect} from 'react-redux';
import './Content.scss';
import {SettingFilled} from '@ant-design/icons';
import { useState } from 'react';

const Content = ({sideBarActive}) =>{
  
    return(
        <header id="content-container" className="container-about" style={{marginLeft:sideBarActive?250:100}} >
            <div id="set1">
                    <SettingFilled />
            </div>
            <div id="set2">
                    <SettingFilled />
                </div>
            <div className="me">
                <h1>About Me</h1>
                <div className="me-description">
                    Hi, I'm Manuel, i studied Mechatronical Engineering at UNAM, I love to make great things with the newest 
                    technologies, I'm a self-taught person since last 5 years, I want to become a certified architect of AWS. 
                </div>

                <h1 id="education">Education</h1>
                <div id="card-edu-img">
                    <div className="card-education" >
                        <img src="images/unam.jpg" alt="card-edu"/> 
                        <span className="descrip-edu">
                            Mechatronical Engireering 2016-2020
                        </span>
                    </div>
                    <div className="card-education">
                        <img src="images/platzi.jpg" alt="card-edu"/>
                        <span className="descrip-edu">
                            AWS cloud, React.js, Github, Algorithms, 2018-2020
                        </span>
                    </div>
                    <div className="card-education">
                        <img src="images/udemy.png" alt="card-edu"/>
                        <span className="descrip-edu">
                            Node.js, React.js, Python, ML 2018-2020
                        </span>
                    </div>
                    <div className="card-education">
                        <img src="images/datacamp.png" alt="card-edu"/>
                        <span className="descrip-edu">
                            ML, Python, SQL 2019
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

const stateToProps = (state)=>{
    return({
        sideBarActive:state.sideBarActive
    });
}

export default connect(stateToProps)(Content);