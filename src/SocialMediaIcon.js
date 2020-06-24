import React  from 'react';
import LinkedIn from './linkedin.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import './SocialMediaIcon.css';

function SocialMediaIcon(props) {
   if (props.network == "linkedin") {
        return (<a href={props.url}><img src={LinkedIn}/></a>);
   } else if (props.network == "twitter") {
        return (<a href={props.url}><img src={Twitter} /></a>)
   } else if (props.network == "instagram") {
        return (<a href={props.url}><img src={Instagram} /></a>)
   }

}

export default SocialMediaIcon;