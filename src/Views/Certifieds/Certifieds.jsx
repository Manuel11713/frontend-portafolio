import React from 'react';
// import pdfCertified from './pdf/awscloud.pdf';
const Certifieds = ({path}) =>{
    
    return(
            <embed  src={`../pdf/${path}.pdf`} width="100%" height="1000px"/>    
    );
}

export default Certifieds;