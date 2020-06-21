import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <AwesomeButton type="secondary" href="/about">About</AwesomeButton>
                <AwesomeButton type="secondary" href="/resume">Resume</AwesomeButton>
                <AwesomeButton type="secondary" href="/projects">Projects</AwesomeButton>
            </div>
        );

    }
}

export default HomePage;