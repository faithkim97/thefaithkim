import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TypeWriter from './TypeWriter';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import logo from "./faith-logo.PNG";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const height = (window.screen.height)/2;
        return(
           <div style={{position:"relative", bottom:-50}}>
                <center>
                <img src={logo}  style={{display:"inline-block",   width:"30%", height:"30%"}} />
               </center>

            <center>
            <TypeWriter text="Faith Kim" />
            <div>
                <AwesomeButton type="secondary" href="/about" style={{margin:"20px", width:"110px"}}>About</AwesomeButton>
                <AwesomeButton type="secondary" href="/projects" style={{margin:"5px"}} >Projects</AwesomeButton>
                <AwesomeButton type="secondary" href="https://www.amazon.com/Piece-Java-Introduction-Programming/dp/B08WPG53Z6/ref=sr_1_1?dchild=1&keywords=a+piece+of+java&qid=1614624168&sr=8-1"
                style = {{margin: "15px"}}> Buy My Book </AwesomeButton>
            </div>
            </center>
            <Footer />
           </div>
        );

    }
}

export default HomePage;