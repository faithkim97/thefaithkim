import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import HomePage from './HomePage';
import Helmet from 'react-helmet';
import AboutPage from './AboutPage';

function Home() {
    return(
        <div>
            <HomePage/>
        </div>
    );
}

function About() {
    return (
        <div style={{position:"relative", bottom:"100px"}}>
            <AboutPage />
        </div>
    )
}

function Resume() {
    return(
        <div>
            <h1>Resume</h1>
        </div>
    );
}

function Projects() {
    return(
        <div>
            <h1>Projects</h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Helmet>
                <body style="background-color: pink" />
            </Helmet>
            <Router>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
            </Router>
        </div>
    );
}

export default App;
