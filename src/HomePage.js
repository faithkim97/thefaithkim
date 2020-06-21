import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./HomePageStyle.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const height = (window.screen.height)/2;
        return(
           <div style={{textAlign:"center"}}>
            <div style={{position:"relative", bottom:-height, display:"inline-block"}}>
                <AwesomeButton type="secondary" href="/about" style={{margin:"5px"}}>About</AwesomeButton>
                <AwesomeButton type="secondary" href="/resume" style={{margin:"5px"}}>Resume</AwesomeButton>
                <AwesomeButton type="secondary" href="/projects" style={{margin:"5px"}} >Projects</AwesomeButton>
            </div>
            </div>
        );

    }
}

export default HomePage;