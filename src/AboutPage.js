import React, {Component} from 'react';
import AboutDescription from './AboutDescription';
import './SocialMediaIcon.css';
import './TextStyle.css';
import TypeWriter from './TypeWriter';
import Footer from './Footer';
import Articles from './Articles';
import SocialMediaIcon from './SocialMediaIcon';

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div style={{position:"absolute", top:"200px", right:"0%"}}>
                <SocialMediaIcon url="/" network="home" />
                </div>
                <TypeWriter text="About Faith" bottom={-200} />
            <div style={{textAlign:"center"}}>
                <AboutDescription />
            </div>
            <div style={{position:"relative", bottom:-220, textAlign:"center"}}>
                <TypeWriter text="Featured In" />
            </div>
                <Articles />
            <div style={{ left:"50%", width:"auto", height: "auto"}}>
            <Footer />
            </div>
             </div>

        );
    }


}

export default AboutPage;