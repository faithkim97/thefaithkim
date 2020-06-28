import React from 'react';
import ProfilePic from './profilepic.jpg';
import './SocialMediaIcon.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmithCollegeArticle from './smithcollegearticle.png';
import ReigningIt from './reigningit.png';
import GamingLabArticle from './gaminglab.png';


function Articles(props) {
    return (
        <div className="fadeIn" style={{ bottom: "-200px", display:"inline-block", height:"auto", width:"100%", paddingBottom:"100px", paddingTop:"100px", position:"relative", overflow:"hidden"}}>
            <div style={{display:"block", position:"relative", left:"-5%"}} >
                <Container>
                    <Row>
                        <Col md ="auto">
                             <a href="https://www.smith.edu/profile/faith-kim">
                                 <img id="featured" src={SmithCollegeArticle} />
                             </a>
                        </Col>
                        <Col md="auto">
                            <a href="https://www.smith.edu/about-smith/news/digital-storytelling?fbclid=IwAR2HaFyUzPJ5MuxiUMksIuOUCU5rfB6k3zL8ii2PTWrxqz88mlI5MQM89Is">
                                 <img id="featured" src={GamingLabArticle} />
                            </a>
                         </Col>
                        <Col sx = "auto">
                            <a href="https://medium.com/@ReigningIt/women-who-reign-faith-kim-1360a26c5c3b">
                        <img id="featured" src={ReigningIt} />
                          </a>
                        </Col>
                    </Row>
                </Container>
             </div>
        </div>
    );
}

export default Articles;