import React from 'react';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import './Content.scss';

const Content = ({sideBarActive}) =>{
    return(
        <main id="content-container" style={{marginLeft:sideBarActive?250:100}} >
            <Carousel/>
            <div id="education-container">
                <h1 className="title"> Education</h1>
            </div>

        </main>
    );
}
const stateToProps = (state)=>{
    return({
        sideBarActive:state.sideBarActive
    });
}

export default connect(stateToProps)(Content);