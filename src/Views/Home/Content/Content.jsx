import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Content.scss';

import {UserOutlined, SettingFilled,ArrowLeftOutlined  } from '@ant-design/icons';
import {Avatar} from 'antd';

// const icons = ["antd.png","aws.png","bootstrap.jpg","css.png","git.png","heroku.jpg","html.png","js.png","jupyter.png","linux.jpg",
// "mongo.png","mysql.png","node.jpg","python.jpg","pytorch.png","react.png","redux.png","sass.png",""];

const Content = ({sideBarActive}) =>{
    

    return(
        <header id="content-container" style={{marginLeft:sideBarActive?250:100}} >
            
            <section id="name-title">
                <Avatar className="avatar-img" size={200} icon={<UserOutlined />} />

            </section>  
            <div id="container-resume">

                <div className="resume">
                    <h1 className="name">Hi.</h1>
                    <h1 className="name">I'm Manuel</h1>
                    <h1 className="name">I'm Full Stack Developer</h1>
                    <Link to="/contact" className="contact-me">Contact Me</Link><ArrowLeftOutlined className="contact-arrow"/>
                </div>
                <div id="description">
                    <SettingFilled />
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