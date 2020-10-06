import React from 'react';
import {connect} from 'react-redux';
import CardWork from './CardWork';
import worksData from './worksdata.json';
import ModalWork from './ModalWork';
import {useMediaQuery} from '@react-hook/media-query'
import './Content.scss';
import { useState } from 'react';

const Content = ({sideBarActive}) =>{
    const [images,setImages] = useState([]);
    const [visible,setVisible] = useState(false);
    const notPhone = useMediaQuery('only screen and (min-width: 500px)');
    let marginL=0;
    if(notPhone && sideBarActive)marginL=250;
    else if(notPhone && !sideBarActive)marginL=100;

    return(
        <>
            <ModalWork images={images} visible={visible} setVisible={setVisible}/>
            <main id="works-container" className="row" style={{marginLeft:marginL}} >
                {worksData.map(work=><CardWork setImages={setImages} setVisible={setVisible} work={work} key={work.id}/>)}            
            </main>
        </>
    );
}

const stateToProps = (state)=>{
    return({
        sideBarActive:state.sideBarActive
    });
}

export default connect(stateToProps)(Content);