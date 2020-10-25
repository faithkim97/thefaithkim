import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamingLabWebsite from './gaminglabwebsite.png';
import CME from './cme.jpg';

function CurrentProfession() {
    return(
        <div style={{display:"inline-block"}}>
            <div style={{position:"relative", bottom:"30px"}}>
                <h1 className="toRight" style={{left:"1%", fontFamily:"Crete Round"}}>Technical Work</h1>
                <Container fluid style={{ position:"relative",float:"left", bottom:"-30px"}}>
                    <Row>
                        <Col md={8} ><p>I currently work as a backend software engineer for CME Group.
                            I work in the Pricing and Trade Services division supporting applications that calculate settlement prices for a variety of products/contracts, where
                            we mainly use Java and Spring for our backend framework, Oracle for database. I work closely with our business team to develop new settlement algorithms, support app maintenance in production environment, and deploy builds with new features to enhance user experience and settlement processes.
                        </p></Col>
                        <Col><img src={CME} style={{width:"100%", height:"auto"}} /></Col>
                    </Row>
                 </Container>
            </div>
        </div>
    );

}

export default CurrentProfession;