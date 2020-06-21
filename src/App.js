import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
//import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function Home() {
    return(
        <div>
            <h1 style={{color:"pink"}}>Hello World!</h1>
//            <AwesomeButton type="secondary" href="/anotherpage">Click</AwesomeButton>
        </div>
    );
}

function AnotherPage() {
    return (
        <div>
            <h1>Another page</h1>
        </div>
    )
}

function App() {
    return (
        <div>
            <Router>
                <Route path="/" component={Home} exact />
                <Route path="/anotherpage" component={AnotherPage} />
            </Router>
        </div>
    );
}

export default App;
