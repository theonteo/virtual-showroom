import {React} from 'react'
import './LandingTitle.css'
import './font.css'
import {Button} from '../Components/NavBar/Button'
function LandingTitle()
 {
    return (
        
        <div className = 'Title-group'>
            <div className = 'Title-heading'>
                ../TheonTeo/
            </div>
            <div className = 'Title-colored'>
               
                 Software Engineer
            </div>
          
            <Button buttonStyle='btn--outline'> Contact</Button>
        </div>
        
    )
}

export default LandingTitle
