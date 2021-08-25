import {React} from 'react'
import './LandingTitle.css'
import './font.css'
import {Button} from '../Components/NavBar/Button'
function LandingTitle()
 {
    return (
        <div>
        <div className = 'Title-heading'>
        Theon
        </div>
       
        <div className = 'Title-subtext'>
        Lorem Ipsum 
        </div>
        <div className = 'Title-subtext'>
        <Button buttonStyle='btn--outline'> Contact</Button>
        </div>
    </div>
    
        /*
        <div className = 'Title-group'>
            <div className = 'Title-heading'>
                ../TheonTeo/
            </div>
            <div className = 'Title-colored'>
               
                 Software Engineer
            </div>
          
            <Button buttonStyle='btn--outline'> Contact</Button>
        </div>
        */
    )
}

export default LandingTitle
