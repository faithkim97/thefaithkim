import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamingLabWebsite from './gaminglabwebsite.png';
import EverythingsFine from './everythingsfine.jpg';
import SocialMediaIcon from './SocialMediaIcon';
import Github from './github.svg';


function TechnicalProjects() {
    return(
        <div>
        <div style={{position:"relative", bottom:"-100px", left:"1%"}}>
         <h2>2019</h2>
           <Row>
               <Col md={8}><img src={GamingLabWebsite} style={{width:"80%", height:"auto"}} /></Col>
               <Col md={4}>
                <h4>Gaming Lab Search Engine</h4>
                <p id="s">Smith College provides a space to explore video games on campus, varying from consoles like PS4, PC, Nintendo Switch, and so on.
                   The struggle lied in how to keep track of all the games the Lab had in its inventory. To solve this problem a search engine for the
                   Gaming Lab had been created through this web application.
                </p>
                <p id="s">Dev Tools: Spring, PostGreSQL, H2, Heroku, ReactJS, Python </p>
                <p id="s"><a href="http://gaminglabatsmith.herokuapp.com/home">Click here to view the website </a></p>
                <p id ="s"><a href="https://medium.com/@thefaithkim/csc-400-creating-the-gaming-lab-search-engine-spring-2019-e5041140a5e0">Click here to view the technical blog post</a></p>
                <SocialMediaIcon url="https://github.com/faithkim97/gamingLab" network="github" />
               </Col>
           </Row>
      </div>

         <div style={{position:"relative", bottom:"-200px", left:"1%"}}>
            <h2> 2018 </h2>
            <Container fluid style={{float:"left", position:"relative", bottom:"-50px"}}>
               <Row>
                   <Col md={8}><img src={EverythingsFine} style={{width:"80%", height:"auto"}} /></Col>
                   <Col md={4}>
                    <h4>Everything's fine: Exploring Mental Health on Campus</h4>
                    <p id="s">Team: Arabia Simeon (Technical Artist), Raven Gomez (Writer), Jasmine Olivarez (Writer), Faith Kim (programmer)</p>
                    <p id="s"><i>Everything's fine</i> was a semester long student project dedicated to opening up a dialogue about mental health on Smith College's campus. The protagonist, Chi, is a POC college student who struggles with atychiphobia, the fear of failure. We explore Chi's anxiety in a familiar 2D sidescroll gameplay, but we worked to subvert the idea of "winning" and "speedrunning" through the game for rewards, as one would see in traditional Mario and Sonic games.</p>
                    <p id="s"> Dev tool: Unity (C#)</p>
                    <p id="s"><a href="https://paradoxproduction.itch.io/everythings-fine">Download the Game Here</a></p>
                    <p id="s">Watch gameplays: <a href="https://www.youtube.com/watch?v=9EyGN39U_DY">Part 1</a>,
                    <a href="https://www.youtube.com/watch?v=uPdJTHyRJ8A">Part 2</a></p>
                    <SocialMediaIcon url="https://github.com/faithkim97/aty" network="github" />
                   </Col>
               </Row>
            </Container>
         </div>
     </div>
    );

}

export default TechnicalProjects;