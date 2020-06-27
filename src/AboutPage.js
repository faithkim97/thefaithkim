import React, {Component} from 'react';
import AboutDescription from './AboutDescription';
import './SocialMediaIcon.css';
import './TextStyle.css';
import TypeWriter from './TypeWriter';

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="typewriter" >
                <h1 className="fadeIn" id="gameFont" style={{position:"absolute", bottom:"500px"}}>About Faith</h1>
            <div style={{textAlign:"center"}}>
                <AboutDescription />
            </div>
             </div>

        );
    }


}

export default AboutPage;