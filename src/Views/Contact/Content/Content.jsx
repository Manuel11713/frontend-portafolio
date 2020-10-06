import React,{useState} from 'react';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import './Content.scss';
import axios from 'axios';
import {useMediaQuery} from '@react-hook/media-query'


import ContactIcons from './ContactIcons';

const Content = ({sideBarActive}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const notPhone = useMediaQuery('only screen and (min-width: 500px)');
    let marginL=0;
    if(notPhone && sideBarActive)marginL=250;
    else if(notPhone && !sideBarActive)marginL=100;

    const handleSubmit = async (e) =>{
        const endPoint  = "https://formspree.io/f/moqpvbbp";
        e.preventDefault();
        if(name==='' || email==='' || subject==='' ||message==='')return alert("please fill all fields");
        e.target.reset();

        const data = {name,email,subject,message};
        const res = await axios.post(endPoint,data);
        const {ok} =  res.data;
       
        if(!ok){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!, please try it later',
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Good Job',
                text: "I've recived your email, I'll be in touch with you ASAP",
            });
        }
    }
    return(
        <main id="form-container" style={{marginLeft:marginL}} >
            <div id="methods">
                <h3>Contact Me</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Subject" onChange={e=>setSubject(e.target.value)}/>
                    <textarea placeholder="Message" onChange={e=>setMessage(e.target.value)}/>
                    <button id="button-contact">Send</button>
                    
                </form>
                <div className="divider">
                    <div className="line-divider"></div>
                    <span>or</span>
                    <div className="line-divider"></div>
                </div>
                <ContactIcons/>
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