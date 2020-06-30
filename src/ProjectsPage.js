import React, {Component} from 'react';
import AboutDescription from './AboutDescription';
import './SocialMediaIcon.css';
import './TextStyle.css';
import {Container, Row, Col} from 'react-bootstrap';
import TypeWriter from './TypeWriter';
import Footer from './Footer';
import SocialMediaIcon from './SocialMediaIcon';
import CurrentProfession from './CurrentProfession';
import TechnicalProjects from './TechnicalProjects';
import OtherWorks from './OtherWorks';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{position:"relative", bottom:"-40px"}}>
                    <TypeWriter text="Projects" />
                </div>
                <div style={{position:"absolute", top:"50px", right:"0%"}}>
                    <SocialMediaIcon network="home" url="/" />
                </div>
                <div className="fadeIn" style={{ bottom: "-50px", backgroundColor:"white",  width:"100%", paddingBottom:"200px", paddingTop:"100px", position:"relative",  overflow:"auto",
                height:"2000px"}}>
                    <CurrentProfession />
                    <TechnicalProjects />
                    <div style={{position:"relative", bottom:"-400px"}}>
                        <OtherWorks />
                    </div>
                </div>
            </div>

        );

    }


}

export default ProjectsPage;