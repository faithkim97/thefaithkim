import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import HomePage from './HomePage';
import Helmet from 'react-helmet';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

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

function Projects() {
    return(
        <div>
        <ProjectsPage />
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
                <Route path="/projects" component={Projects} />
            </Router>
        </div>
    );
}

export default App;
