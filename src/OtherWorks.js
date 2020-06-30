import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaIcon.css';
import Java from './java.jpg';
import SocialMediaIcon from './SocialMediaIcon';

function OtherWorks() {
    return(
        <div>
            <h1 className="toRight" style={{left:"1%", fontFamily:"Crete Round"}}>Other Works + Resources</h1>
           <Container fluid style={{position:"relative",float:"left", bottom:"-30px"}}>
                <Row>
                    <Col md={4}>
                        <Card style={{width:"100%", height:"auto"}}>
                            <Card.Img src={Java} style={{width:"100%", height:"auto"}}/>
                            <Card.Body>
                                <Card.Title style={{fontFamily:"Crete Round"}}>Learn To Code In Java</Card.Title>
                                <Card.Text id="cardText">Photo Credit: <a href="https://unsplash.com/@thepaintedsquare">Jessica Lewis</a> </Card.Text>
                                <Card.Text id="cardText">In January 2019, I taught a one-week course on learning how to code in Java for students at Smith College.
                                I have made videos, slides, and github repo accessible for anyone interested in learning!
                                </Card.Text>
                                <Card.Text id="cardText"><a href="https://drive.google.com/drive/u/1/folders/1GEXCP1B4UeeAeMQ7LBdKJdlqnhBg8PPI">Slides</a> + <a href="https://www.youtube.com/channel/UCtnkT4J0XBRIIbAS74FFhyw">Videos</a> </Card.Text>
                                <SocialMediaIcon url="https://github.com/faithkim97/JavaJterm2019" network="github" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{width:"100%", height:"auto"}}>
                            <Card.Img src={Java} style={{width:"100%", height:"auto"}} />
                            <Card.Body  >
                                <Card.Title style={{fontFamily:"Crete Round"}}>Learn To Code In Java</Card.Title>
                                <Card.Text id="cardText">Photo Credit: <a href="https://unsplash.com/@thepaintedsquare">Jessica Lewis</a> </Card.Text>
                                <Card.Text id="cardText">In January 2019, I taught a one-week course on learning how to code in Java for students at Smith College.
                                I have made videos, slides, and github repo accessible for anyone interested in learning!
                                </Card.Text>
                                <Card.Text id="cardText"><a href="https://drive.google.com/drive/u/1/folders/1GEXCP1B4UeeAeMQ7LBdKJdlqnhBg8PPI">Slides</a> + <a href="https://www.youtube.com/channel/UCtnkT4J0XBRIIbAS74FFhyw">Videos</a> </Card.Text>
                                <SocialMediaIcon url="https://github.com/faithkim97/JavaJterm2019" network="github" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                         <Card style={{width:"100%", height:"auto"}}>
                            <Card.Img src={Java} style={{width:"100%", height:"auto"}} />
                            <Card.Body >
                                <Card.Title style={{fontFamily:"Crete Round"}}>Learn To Code In Java</Card.Title>
                                <Card.Text id="cardText">Photo Credit: <a href="https://unsplash.com/@thepaintedsquare">Jessica Lewis</a> </Card.Text>
                                <Card.Text id="cardText">In January 2019, I taught a one-week course on learning how to code in Java for students at Smith College.
                                I have made videos, slides, and github repo accessible for anyone interested in learning!
                                </Card.Text>
                                <Card.Text id="cardText"><a href="https://drive.google.com/drive/u/1/folders/1GEXCP1B4UeeAeMQ7LBdKJdlqnhBg8PPI">Slides</a> + <a href="https://www.youtube.com/channel/UCtnkT4J0XBRIIbAS74FFhyw">Videos</a> </Card.Text>
                                <SocialMediaIcon url="https://github.com/faithkim97/JavaJterm2019" network="github" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OtherWorks;