import React from 'react'
import Scene1 from './Scenes/Scene1'
import LandingTitle from './LandingTitle'
import './Landing.css'

function Landing()
{
    return (
        <div className='landingContainer'>
             <div className="landingGroup">
            <div className="RenderWindow">
                <Scene1 />
            </div>
          
                <div className="SideBar">
                    <LandingTitle />
                </div>
                </div>
           
        </div>
    )
}

export default Landing
