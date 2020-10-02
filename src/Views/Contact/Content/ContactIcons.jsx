import React from 'react';
import {
    GithubOutlined,
    LinkedinOutlined,
    WhatsAppOutlined
}from '@ant-design/icons';

import './Icons.scss';


const ContactIcons = () =>{
    return(
        <div id="icons-contact-container">
            <a href="https://github.com/Manuel11713" target="_blank" rel="noopener noreferrer">
                <GithubOutlined className="icon-contact"/>                
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-manuel-escobedo-lopez-5ab234182/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined className="icon-contact" />
            </a>
            <a href="https://wa.me/525550587931" target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined className="icon-contact"/>
            </a>
        </div>
    );
}

export default ContactIcons;