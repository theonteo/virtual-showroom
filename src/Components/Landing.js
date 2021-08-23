import React from 'react'
import LandingTitle from './LandingTitle'
import Scene1 from './Scenes/Scene1'

import './Landing.css'

function Landing()
 {
    return (
        <div className = 'landingContainer'>
            <div className = "RenderWindow">
                <Scene1/>
                <div className = "SideBar">
                    <LandingTitle/>
                </div>
            </div>
        </div>
    )
}

export default Landing
