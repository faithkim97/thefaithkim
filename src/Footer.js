import React from 'react';
import logo from './logo.svg';
import SocialMediaIcon from './SocialMediaIcon';
function Footer() {
    return (
    <div style = {{position: "relative", bottom:"-100px"}}>
        <center>
        <SocialMediaIcon network="linkedin" url="https://www.linkedin.com/in/faith-kim/" />
        <SocialMediaIcon network="twitter" url ="https://twitter.com/thefaithkim" />
        <SocialMediaIcon network="instagram" url="https://www.instagram.com/thefaithkim/" />
        </center>
    </div>
    );
}

export default Footer;

