import React, {Component} from 'react';
import AboutDescription from './AboutDescription';
import './SocialMediaIcon.css';
import './TextStyle.css';
import TypeWriter from './TypeWriter';
import Footer from './Footer';
import Articles from './Articles';

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <TypeWriter text="About Faith" bottom={-200} />
            <div style={{textAlign:"center"}}>
                <AboutDescription />
            </div>
            <div style={{position:"relative", bottom:-220}}>
                <TypeWriter text="Featured In" />
            </div>
                <Articles />
            <div style={{position:"absolute", bottom:"-30%", left:"50%", width:"auto", height: "auto"}}>
            <Footer />
            </div>

             </div>

        );
    }


}

export default AboutPage;