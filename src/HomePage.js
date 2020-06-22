import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TypeWriter from './TypeWriter';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const height = (window.screen.height)/2;
        return(
           <div>
           <div style={{textAlign:"center"}}>
                <TypeWriter text="Faith Kim" bottom={-height+30} />
            <div style={{position:"relative", bottom:-height}}>
                <AwesomeButton type="secondary" href="/about" style={{margin:"5px"}}>About</AwesomeButton>
                <AwesomeButton type="secondary" href="/resume" style={{margin:"5px"}}>Resume</AwesomeButton>
                <AwesomeButton type="secondary" href="/projects" style={{margin:"5px"}} >Projects</AwesomeButton>
            </div>
            </div>
           </div>
        );

    }
}

export default HomePage;