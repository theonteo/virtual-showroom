import React from 'react'
import Scene1 from './Scenes/Scene1'
import {Button} from '../Components/NavBar/Button'
import './Landing.css'

function Landing()
 {
    return (
        <div className = 'landingContainer'>
            <div className = "RenderWindow">
                
                </div>
                <div className = "SideBar">
                    <Button buttonStyle='btn--outline'> Know More...</Button>
                
            </div>
            <Scene1/>
        </div>
    )
}

export default Landing
