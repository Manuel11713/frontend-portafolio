import React from 'react';
import {connect} from 'react-redux';
import './Content.scss';

import {UserOutlined} from '@ant-design/icons';
import {Avatar } from 'antd';

// const icons = ["antd.png","aws.png","bootstrap.jpg","css.png","git.png","heroku.jpg","html.png","js.png","jupyter.png","linux.jpg",
// "mongo.png","mysql.png","node.jpg","python.jpg","pytorch.png","react.png","redux.png","sass.png",""];

const Content = ({sideBarActive}) =>{
    // const [image,setImage] = useState('antd.png');
    // let count = 1;
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setImage(icons[count%icons.length]);
    //         count++;
    //     },2000);
    // },[count]);

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
                </div>
                <div id="description">
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