import React from 'react';
import ProfilePic from './profilepic.jpg';
import './SocialMediaIcon.css';
function AboutDescription(props) {
    return (
        <div className="fadeIn" style={{ bottom: "-200px", display:"inline-block", backgroundColor:"white", height:"2000px", width:"100%", position:"relative", overflow:"hidden"}}>
            <img className="toLeft" src={ProfilePic} style={{display:"block",position:"relative", left:"65%", bottom:"-5%", width:"30%", height:"auto", maxWidth:"100%", maxHeight:"100%"}} />
        </div>
    );
}

export default AboutDescription;