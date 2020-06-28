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
                        <Col md ="auto"><img id="featured" src={SmithCollegeArticle} /></Col>
                        <Col md="auto"><img id="featured" src={GamingLabArticle} /></Col>
                        <Col sx = "auto"><img id="featured" src={ReigningIt} /></Col>
                    </Row>
                </Container>
             </div>
        </div>
    );
}

export default Articles;