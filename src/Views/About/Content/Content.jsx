import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Content.scss';
import {useMediaQuery} from '@react-hook/media-query'

import {SettingFilled} from '@ant-design/icons';

const Content = ({sideBarActive}) =>{
    const notPhone = useMediaQuery('only screen and (min-width: 500px)');
    let marginL=0;
    if(notPhone && sideBarActive)marginL=250;
    else if(notPhone && !sideBarActive)marginL=100;

    return(
        <header id="content-container" className="container-about" style={{marginLeft:marginL}} >
            <div id="set1">
                <SettingFilled />
            </div>
            <div id="set2">
                <SettingFilled />
            </div>
            <div className="me">
                <h1>About Me</h1>
                <div className="me-description">
                    <span>
                        Hi, I'm Manuel, i studied Mechatronical Engineering at UNAM, I love to make great things with the newest 
                        technologies, I'm a self-taught person since last 3 years, I want to become a certified architect of AWS. 
                    </span>
                </div>

                <h1  id="education-title">Education</h1>
                <div id="education">
                    <div className="education-card">
                        <img className="education-img" src="images/unam.jpg" alt="card-edu"/> 
                        <ul>
                            <li>Mechatronic Engineering 2016 - 2020</li>
                        </ul>
                    </div>
                    <div className="education-card">
                        <img className="education-img" src="images/platzi.jpg" alt="card-edu"/>
                        <ul>
                            <li>
                                <Link className="certified" to="certifieds/awscloud">AWS Cloud (Certified)</Link>
                            </li>
                            <li>React.js</li>
                            <li>Github</li>
                            <li>Algorithms</li>
                        </ul>
                    </div>
                    <div className="education-card">
                        <img className="education-img" src="images/udemy.png" alt="card-edu"/>
                        <ul>
                            <li>Node: De cero a experto</li>
                            <li>React JS + Redux + ES6. Completo ¡De 0 a experto! (español)</li>
                            <li>The Complete Neural Networks Bootcamp: Theory, Applications</li>
                        </ul>
                    </div>
                    <div className="education-card">
                        <img className="education-img" src="images/datacamp.png" alt="card-edu"/>
                        <ul>
                            <li >
                                <Link className="certified" to="certifieds/pythonfn">Introduction to python for finance (Certified)</Link>
                            </li>
                            <li >
                                <Link className="certified" to="certifieds/mltofinance">Machine Learning for Finance in Python (Certified)</Link>
                            </li>
                        </ul>
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


// <div className="card-education" >
// <img src="images/unam.jpg" alt="card-edu"/> 
// <span className="descrip-edu">
//     Mechatronical Engireering 2016-2020
// </span>
// </div>
// <div className="card-education">
// <img src="images/platzi.jpg" alt="card-edu"/>
// <span className="descrip-edu">
//     AWS cloud, React.js, Github, Algorithms, 2018-2020
// </span>
// </div>
// <div className="card-education">
// <img src="images/udemy.png" alt="card-edu"/>
// <span className="descrip-edu">
//     Node.js, React.js, Python, ML 2018-2020
// </span>
// </div>
// <div className="card-education">
// <img src="images/datacamp.png" alt="card-edu"/>
// <span className="descrip-edu">
//     ML, Python, SQL 2019
// </span>
// </div>