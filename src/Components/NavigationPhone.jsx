import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {HomeOutlined, UserOutlined, StarOutlined, FolderOutlined, MailOutlined} from '@ant-design/icons';
import './NavigationPhone.scss';
const NavigationPhone = () =>{
    let location = useLocation();

    return(
        <nav id="navPhone-container">
            <ul id="container-links-phone">

                <Link to="/">
                    <li className="links">
                        <HomeOutlined className={`icon-menu ${location.pathname==='/'?'active-path':null}`}/>                
                    </li>
                </Link>
                <Link to="/about">
                    <li className="links">
                        <UserOutlined className={`icon-menu ${location.pathname==='/about'?'active-path':null}`}/>                
                    </li>
                </Link>
                <Link to="/skills">
                    <li className="links">
                        <StarOutlined className={`icon-menu ${location.pathname==='/skills'?'active-path':null}`}/>                
                     </li>
                </Link>
                <Link to="/works">
                    <li className="links">
                        <FolderOutlined className={`icon-menu ${location.pathname==='/works'?'active-path':null}`}/>                
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="links">
                        <MailOutlined className={`icon-menu ${location.pathname==='/contact'?'active-path':null}`}/>
                    </li>
                </Link>
            </ul>
        </nav>

    );
}

export default NavigationPhone;