import React from 'react';

import './Others.scss';

const Others = () =>{
    return(
        <div id="oth-container" >
            <h2>Others</h2>
            <div className="oth">
                <div>
                    <h3>Git</h3>
                    <img  src="/images/icons/git.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Jenkins</h3>
                    <img  src="/images/icons/jenkins.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Nginx</h3>
                    <img  src="/images/icons/nginx.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Jupyter</h3>
                    <img  src="/images/icons/jupyter.png" alt="fl-icon"/>
                </div>
            </div>
            <div className="oth">
                <div>
                    <h3>Gulp</h3>
                    <img id="gulp" src="/images/icons/gulp.png" alt="fl-icon"/>
                </div>
                <div>
                    <h3>Docker</h3>
                    <img  src="/images/icons/docker.png" alt="fl-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Others;