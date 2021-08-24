import React from 'react'
import LandingTitle from './LandingTitle'
import Scene1 from './Scenes/Scene1'
import {Button} from '../Components/NavBar/Button'
import './Landing.css'

function Landing()
 {
    return (
        <div className = 'landingContainer'>
            <div className = "RenderWindow">
                <Scene1/>
                <div className = "SideBar">
                    <Button buttonStyle='btn--outline'> Know More...</Button>
                </div>
            </div>
        </div>
    )
}

export default Landing
