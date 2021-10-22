import { React } from 'react'
import './LandingTitle.css'
import './font.css'
//import { Button } from '../Components/NavBar/Button'
function LandingTitle()
{
    return (
        <div>
            <div className='grid-wrapper'>
                <div className='grid-main'>
                    <div className='grid-gap'> </div>

                    <div className='Title-heading-rotated'>
                        The Exterior.
                    </div>
                    <div className='grid-gap'> </div>
                    <div className='grid-main'>

                    </div>
                    <div className='grid-start'>
                        <div className='grid-1'></div> <div className='grid-1'></div>
                        <div className='grid-1-boxed'>
                            <div className='grid-1-text-black'>
                                The pursuit of effective use of space.
                            </div>
                        </div>

                    </div>
                    <div className='grid-gap'> </div>
                    <div className='grid-start'>
                        <div className='grid-1-boxed'>
                            <div className='grid-1-text-black'>
                                A new space for you.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )

}

export default LandingTitle
