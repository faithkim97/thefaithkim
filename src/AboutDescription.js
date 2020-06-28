import React from 'react';
import ProfilePic from './profilepic.jpg';
import './SocialMediaIcon.css';
function AboutDescription(props) {
    return (
        <div className="fadeIn" style={{ bottom: "-200px", display:"inline-block", backgroundColor:"white", height:"auto", width:"100%", paddingBottom:"200px", paddingTop:"100px", position:"relative", overflow:"auto"}}>
            <img className="toLeft" src={ProfilePic} style={{display:"block",position:"relative", left:"65%", bottom:"-5%", width:"30%", height:"auto", maxWidth:"100%", maxHeight:"100%"}} />
           <div style={{ display:"block", position: "absolute", top:"4%", left:"5%", margin:0, padding:0, width:"50%"}}>
            <p>Name: Faith Kim</p>
            <p>Pronouns:She/her</p>
            <p>Education: Smith College Class of 2019</p>
            <p><a href="https://medium.com/@thefaithkim">Medium Blog</a></p>
            <p>Hi! My name is Faith, and I currently work as a backend software engineer.
             I graduated from Smith College in May 2019 with a B.A. in Computer Science and a minor
             in Mathematics.
             </p>
              <p>
                I mainly use Java and Spring in my day-to-day to life, but I'm also interested in
                learning more about frontend frameworks such as React (currently using React to create this website) and
                hone my skills from a full stack standpoint. I also like to develop video games using Unity.
              </p>
              <p>
                My true passion lies in mentorship for womxn of color in the tech industry. I have worked as the Vice President
                of Smith College's Computer Science organization, Smithies in CS, in hopes of creating a comfortable and inclusive space for
                students of all background to learn about tech and computer science. I hope to garner my skills and experience in the
                 tech industry to offer more helpful resources to womxn in tech.
              </p>
            </div>
        </div>
    );
}

export default AboutDescription;