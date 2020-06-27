import React, {Component} from 'react';
import AboutDescription from './AboutDescription';
class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <AboutDescription />
            </div>
        );
    }


}

export default AboutPage;