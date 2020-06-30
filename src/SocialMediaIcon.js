import React  from 'react';
import LinkedIn from './linkedin.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import HomeIcon from './homeIcon.svg';
import Github from './github.svg';
import './SocialMediaIcon.css';

function SocialMediaIcon(props) {
   if (props.network == "linkedin") {
        return (<a href={props.url}><img className="icon" src={LinkedIn}/></a>);
   } else if (props.network == "twitter") {
           return (<a href={props.url}><img className="icon" src={Twitter} /></a>)
   } else if (props.network == "instagram") {
        return (<a href={props.url}><img className="icon" src={Instagram} /></a>)
   } else if (props.network=="home") {
       return(<a href={props.url}><img className="icon" src={HomeIcon} /> </a>);
   } else if (props.network=="github") {
     return (<a href={props.url}><img className="icon" src={Github} /> </a>);
   }
}

export default SocialMediaIcon;