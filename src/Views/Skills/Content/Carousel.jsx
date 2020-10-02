import React from 'react';
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';

import Languages from './Languages';
import FrameLibs from './FrameLibs';
const Carousel = () =>{
    return(
        <div>
            <h1 className="title">Skills</h1>
            <div id="carousel-container">
                <div className="button-slide">
                        <LeftOutlined className="icon-slides"/>
                </div>
                <div id="slides-container">
                    
                    {/* <Languages/> */}
                    <FrameLibs/>
                </div>
                <div className="button-slide">
                        <RightOutlined className="icon-slides"/>
                </div>
            </div>
        </div>
    );
}

export default Carousel