import React from 'react';
import {connect} from 'react-redux';
import {Link,useLocation} from 'react-router-dom';
import {
    FolderOutlined,
    MailOutlined,
    LeftOutlined,
    RightOutlined,
    HomeOutlined,
    StarOutlined,
    UserOutlined
} from '@ant-design/icons';

import './Navigation.scss';

const Navigation = ({sideBarActive,setBarActive}) =>{
    let location = useLocation();
    //location.pathname
    //#64dd17
    

    return(
        
        <nav id="navigation-container" style={{width:sideBarActive?250:100}}>
            
            <ul id="container-links">
                
                {!sideBarActive?<li className="links toggle" onClick={()=>setBarActive(true)}>
                    <RightOutlined className="icon-menu"/>                 
                </li>:
                <li className="links toggle" onClick={()=>setBarActive(false)}>
                    <LeftOutlined className="icon-menu"/>                 
                </li>}

                <Link to="/">
                    <li className="links">
                        <HomeOutlined className={`icon-menu ${location.pathname==='/'?'active-path':null}`}/>{sideBarActive?<span className="descrip">About</span>:null}
                    </li>
                </Link>
                <Link to="/about">
                    <li className="links">
                        <UserOutlined className={`icon-menu ${location.pathname==='/about'?'active-path':null}`}/>{sideBarActive?<span className="descrip">About</span>:null}
                    </li>
                </Link>
                <Link to="/skills">
                    <li className="links">
                        <StarOutlined className={`icon-menu ${location.pathname==='/skills'?'active-path':null}`}/>{sideBarActive?<span className="descrip">Skills</span>:null}
                    </li>
                </Link>
                <Link to="/works">
                    <li className="links">
                        <FolderOutlined className={`icon-menu ${location.pathname==='/works'?'active-path':null}`}/>{sideBarActive?<span className="descrip">Works</span>:null}
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="links">
                        <MailOutlined className={`icon-menu ${location.pathname==='/contact'?'active-path':null}`}/>{sideBarActive?<span className="descrip">Contact</span>:null}
                    </li>
                </Link>
            </ul>
        </nav>
        
    );
}
const stateToProps = (state)=>{
    return({
        sideBarActive:state.sideBarActive
    });
}
const dispatchToProps = (dipatch) =>{
    return({
        setBarActive(active){
            dipatch({
                type:'SIDE_BAR',
                value:active
            });
        }
    })
}
export default connect(stateToProps,dispatchToProps)(Navigation);