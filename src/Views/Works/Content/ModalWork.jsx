import React from 'react';
import './ModalWork.scss';

import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';


const ModalWork = ({images,setVisible, visible}) =>{
    const [count, setCount] = useState(0);
    const closeModal = (e) =>{
        if(e.target.id==='modal-work')setVisible(false);
    }
    const restCount = () =>{
        if(count===0)return setCount(images.length-1);
        setCount(count-1);
    }
    const plusCount = () =>{
        setCount(count+1);
    }
    return(
        <div id="modal-work" className={`${visible?'':'hidden'}`} onClick={closeModal}>
            <div className="icon-modal-carousel" onClick={restCount}>
                <LeftOutlined />
            </div>
            <div className="carousel-modal-container" onClick={plusCount}>
                <img className="img-modal-work" src={images[count%images.length]}/>
            </div>
            <div className="icon-modal-carousel" onClick={plusCount}>
                <RightOutlined />
            </div>
        </div>
    );
}

export default ModalWork;