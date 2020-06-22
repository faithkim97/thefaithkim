import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TypeWriter from './TypeWriter';
import Image from 'react-bootstrap/Image';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const height = (window.screen.height)/2;
        return(
           <div style={{position:"relative", bottom:-50}}>
               <center><Image src='https://www.pikpng.com/pngl/b/275-2758906_hipster-transparent-aesthetic-easy-grunge-aesthetic-drawings-clipart.png'
                                       style={{display:"inline-block",   width:"30%", height:"30%"}}
                                       />
               </center>

            <center>
            <TypeWriter text="Faith Kim" />
            <div>
                <AwesomeButton type="secondary" href="/about" style={{margin:"5px"}}>About</AwesomeButton>
                <AwesomeButton type="secondary" href="/resume" style={{margin:"5px"}}>Resume</AwesomeButton>
                <AwesomeButton type="secondary" href="/projects" style={{margin:"5px"}} >Projects</AwesomeButton>
            </div>
            </center>
           </div>
        );

    }
}

export default HomePage;