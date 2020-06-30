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
                            I work in the Pricing and Trade Services division supporting algorithms
                            and applications that calculate settlement prices for a variety of products/contracts, such as corn and wheat futures to name a few.
                            We mainly use Java and Spring for our backend framework, and work mainly with Oracle for database support. I work to develop new algorithms
                            to support settling specific products, maintain our current applications through contributing to a production support rotation, and I am also
                            responsible for supporting deployments of new features for our applications.
                        </p></Col>
                        <Col><img src={CME} style={{width:"100%", height:"auto"}} /></Col>
                    </Row>
                 </Container>
            </div>
        </div>
    );

}

export default CurrentProfession;