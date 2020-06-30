import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamingLabWebsite from './gaminglabwebsite.png';


function TechnicalProjects() {
    return(
        <div style={{position:"relative", bottom:"-100px", left:"1%"}}>
         <h2 style={{fontFamily:"Crete Round"}}>2019</h2>
          <Container fluid style={{float:"left", position:"relative", bottom:"-50px"}}>
           <Row>
               <Col md={8}><img src={GamingLabWebsite} style={{width:"80%", height:"auto"}} /></Col>
               <Col md={4}>
                <h4>Smith College Senior Independent Project </h4>
                <p id="s">Smith provides a space to explore video games on campus, varying from consoles like PS4, PC, Nintendo Switch, and so on.
                   The struggle lied in how to keep track of the games the Lab in its inventory. To solve this problem a search engine for the
                   Gaming Lab had been created through this web application.
                </p>
                <p id="s"><a href="http://gaminglabatsmith.herokuapp.com/home">Click here to view the website (Not Mobile Friendly)</a></p>
                <p id ="s"><a href="https://medium.com/@thefaithkim/csc-400-creating-the-gaming-lab-search-engine-spring-2019-e5041140a5e0">
                Click here to view the technical blog post</a></p>
               </Col>
           </Row>
        </Container>
     </div>
    );

}

export default TechnicalProjects;