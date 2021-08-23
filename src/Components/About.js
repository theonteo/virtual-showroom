import React from 'react'
import './About.css'
import {Button} from '../Components/NavBar/Button'


function About()
{
    return(
    <>
        <div className = 'AboutContainer'>

            <div className = 'LeftPanel'>
                <div className = 'Title'>About</div>
                <div class="line"></div>
                <div className = 'SubText'>Hi I am Theon! Currently a Computer Science Undergraduate in DigiPen Singapore.

Starting out from game development, I am currently pursuing software engineering and development with a focus in front-end aspects.
</div>
<div className = 'SubText'> My interests are in Front-End Graphics Rendering , Technical Art and Full-stack development.

During my free-time from schoolwork, I enjoy exploring the different aspects of frontend web/app development, and trying out various frameworks , languages or API such as combining 3D rendering in a 2D based website.

</div>

<div className = 'SubText'>
Feel free to reach out to me as I am open to networking with like-minded peers and improving my technical skills!
</div>
<Button buttonStyle='btn--outline'> Get In Touch</Button>

            </div>
            <div className = 'RightPanel'>
            </div>   
        </div>
    </>);
}

export default About;