import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaIcon.css';
import Java from './java.jpg';
import TA from './TA.png';
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
   <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLotusVisualsOfficial%2Fvideos%2F179891312532664%2F&show_text=0&width=560"
                                                       width="100%" height="250px" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                            <Card.Body >
                                <Card.Title style={{fontFamily:"Crete Round"}}>HackSmith 2018 Organizer</Card.Title>
                                <Card.Text id="cardText">Filmography by: <a href = "https://www.austinbrooksproductions.com/?fbclid=IwAR0D3gPA__YgwaE-X7LdoxYFUjpbVCAx7parrlK6xmjbFBrflZXQHQA0xNY">
                                Austin Brooks </a></Card.Text>
                                <Card.Text id="cardText">In April 2018, we organized our annual hackathon, HackSmith 2018.
                                    HackSmith is a great opportunity for students to collaborate into teams and create a technical project within 24 hours.
                                    I was part of organizing the budget, the location, workshops, and sponsorship to make this hackathon successful.
                                    The video here shows the award ceremony after the competitors had presented their wonderful projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{width:"100%", height:"auto"}}>
                            <a href="https://www.youtube.com/watch?v=j0XVdK-Y83k"><Card.Img src={TA} style={{width:"100%", height:"auto"}} /> </a>
                            <Card.Body>
                                <Card.Title style={{fontFamily:"Crete Round"}}>Lecture Videos on Data Structures</Card.Title>
                                <Card.Text id="cardText">I have also worked as a Teaching Assistant for Computer Science at Smith College, primarily tutoring
                                    Introduction to Data Structures. The course was taught in Java, and subsequent lecture videos were created to
                                    help students review lessons + notes they learned during class hours.
                                </Card.Text>
                                <Card.Text id="cardText"><a href="https://www.youtube.com/channel/UC7lg1jNJrOU9x6k7xi5hyWw">Lecture videos</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default OtherWorks;