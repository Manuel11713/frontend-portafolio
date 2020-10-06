import React from 'react';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import {useMediaQuery} from '@react-hook/media-query'

import './Content.scss';

const Content = ({sideBarActive}) =>{
    const notPhone = useMediaQuery('only screen and (min-width: 500px)');
    let marginL=0;
    if(notPhone && sideBarActive)marginL=250;
    else if(notPhone && !sideBarActive)marginL=100;

    return(
        <main id="content-container" className="skills-container" style={{marginLeft:marginL}} >
            <Carousel/>
        </main>
    );
}
const stateToProps = (state)=>{
    return({
        sideBarActive:state.sideBarActive
    });
}

export default connect(stateToProps)(Content);