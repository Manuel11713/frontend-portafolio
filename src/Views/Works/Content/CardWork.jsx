import React from 'react';
import {EyeOutlined, GithubOutlined} from '@ant-design//icons';
import './CardWork.scss';
const CardWork = ({setImages, setVisible, work}) =>{
    return(
            <div className="imgwork-container">
                <div >
                    <h2 className="title-work">{work.title}</h2>
                    <div className="links-works">
                        <EyeOutlined  className="see-work" onClick={()=>{setImages(work.images);setVisible(true)}}/>
                        <a href={work.github} className="github-work" target="_blank" rel="noopener noreferrer">
                            <GithubOutlined />
                        </a>
                    </div>
                </div>
                <img className="img-work" src={work.images[0]} alt={work.title}/>
            </div>
    );
}
export default CardWork;