import React from 'react';
import ProfilePic from './profilepic.jpg';
import './SocialMediaIcon.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmithCollegeArticle from './smithcollegearticle.png';
import ReigningIt from './reigningit.png';
import GamingLabArticle from './gaminglab.png';


function Articles(props) {
    return (
        <div className="fadeIn" style={{ bottom: "-200px", display:"inline-block", height:"auto", width:"100%", paddingBottom:"100px", paddingTop:"10px", position:"relative", overflow:"hidden"}}>
            <div style={{display:"block"}} >
                <Container>
                    <Row>
                        <Col md ={4}>
                        <Card>
                             <a href="https://www.smith.edu/profile/faith-kim">
                                    <Card.Img id="featured" src={SmithCollegeArticle} />
                             </a>
                         </Card>
                        </Col>
                        <Col md={4}>
                           <Card>
                            <a href="https://www.smith.edu/about-smith/news/digital-storytelling?fbclid=IwAR2HaFyUzPJ5MuxiUMksIuOUCU5rfB6k3zL8ii2PTWrxqz88mlI5MQM89Is">
                                 <Card.Img id = "featured" src={GamingLabArticle} />
                            </a>
                            </Card>
                         </Col>
                        <Col sx = {4}>
                            <Card>
                            <a href="https://medium.com/@ReigningIt/women-who-reign-faith-kim-1360a26c5c3b">
                               <Card.Img id="featured" src={ReigningIt} />
                          </a>
                          </Card>
                        </Col>
                    </Row>
                </Container>
             </div>
        </div>
    );
}

export default Articles;