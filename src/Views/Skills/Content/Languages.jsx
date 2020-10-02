import React from 'react';
import './Lang.scss';

const Languages = () =>{
    return(
        <div id="lang-container">
            <h2>Languages</h2>
            <div className="langs">

                <div>
                    <h3>JavaScript</h3>
                    <img alt="skill-img" src="/images/icons/js.png"/>
                </div>
                <div>
                    <h3>Python</h3>
                    <img alt="skill-img" src="/images/icons/python.jpg"/>
                </div>
                <div>
                    <h3>TypeScript</h3>
                    <img alt="skill-img" src="/images/icons/typescript.png"/>
                </div>
                <div>
                    <h3>Golang</h3>
                    <img alt="skill-img" src="/images/icons/go.png"/>
                </div>
            </div>
            <div className="langs">
                <div>
                    <h3>Html</h3>
                    <img alt="skill-img" src="/images/icons/html.png"/>
                </div>
                <div>
                    <h3>Css</h3>
                    <img alt="skill-img" src="/images/icons/css.png"/>
                </div>
                <div>
                    <h3>Sass</h3>
                    <img alt="skill-img" src="/images/icons/sass.png"/>
                </div>
            </div>
        </div>
    );
}

export default Languages;