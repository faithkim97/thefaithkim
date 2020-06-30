import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CME from './cme.jpg';
import GamingLabWebsite from './gaminglabwebsite.png';

function TechnicalProjects() {
    return(
        <div style={{display:"inline-block"}}>
            <div style={{position:"relative", bottom:"30px"}}>
                <h1 className="toRight" style={{left:"1%", fontFamily:"Crete Round"}}>Technical Work</h1>
                <Container fluid style={{ position:"relative",float:"left", bottom:"-30px"}}>
                    <Row>
                        <Col md={8} ><p>I currently work as a backend software engineer for CME Group.
                            I work in the Pricing and Trade Services division supporting algorithms
                            and applications that calculate settlement prices for a variety of products/contracts, such as corn and wheat futures to name a few.
                            We mainly use Java and Spring for our backend framework, and work mainly with Oracle for database support. I work to develop new algorithms
                            to support settling specific products, maintain our current applications through contributing to a production support rotation, and I am also
                            responsible for supporting deployments of new features for our applications.
                        </p></Col>
                        <Col><img src={CME} style={{width:"100%", height:"auto"}} /></Col>
                    </Row>
                 </Container>
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
                            <p id="s"><a href="http://gaminglabatsmith.herokuapp.com/home">Click here to view the website</a></p>
                            <p id ="s"><a href="https://medium.com/@thefaithkim/csc-400-creating-the-gaming-lab-search-engine-spring-2019-e5041140a5e0">
                            Click here to view the technical blog post</a></p>
                           </Col>
                       </Row>
                    </Container>
                 </div>

            </div>
        </div>
    );

}

export default TechnicalProjects;