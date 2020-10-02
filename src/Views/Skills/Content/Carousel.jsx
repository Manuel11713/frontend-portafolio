import React, { useState } from 'react';
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';

import './Carousel.scss';

import Languages from './Languages';
import FrameLibs from './FrameLibs';
import Databases from './Databases';
import Infraestructures from './Infraestructures';
import Others from './Others';

const Carousel = () =>{
    // const [active,setActive] = useState(0);
    const [count,setCount] = useState(0);
    const restCount = () =>{
        if(count===0)return setCount(4);
        setCount(count-1);
    }
    const plusCount = () =>{
        setCount(count+1);
        
    }
    return(
        <div>
            <h1 className="title">Skills</h1>
            <div id="carousel-container">
                <div className="button-slide" >
                        <LeftOutlined className="icon-slides" onClick={restCount}/>
                </div>
                <div id="slides-container">
                    <div className={count%5!==0?'hidden':null}>
                        <Languages/>
                    </div>
                    <div className={count%5!==1?'hidden':null}>
                        <FrameLibs/>
                    </div>
                    <div className={count%5!==2?'hidden':null}>
                        <Databases/>
                    </div>
                    <div className={count%5!==3?'hidden':null}>
                        <Infraestructures/>
                    </div>
                    <div className={count%5!==4?'hidden':null}>
                        <Others/>
                    </div>
                </div>
                <div className="button-slide">
                        <RightOutlined className="icon-slides" onClick={plusCount}/>
                </div>
            </div>
        </div>
    );
}

export default Carousel