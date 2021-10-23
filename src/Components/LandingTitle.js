import { React } from 'react'
import './LandingTitle.css'
import './font.css'
import { Button } from '../Components/Interaction/Button'
function LandingTitle()
{
    return (
        <div>
            <div className='grid-wrapper'>
                <div className='grid-main'>
                    <div className='grid-gap-small'> </div>
                    <div className='Title-heading-rotated'>
                        The Space.
                    </div>
                    <div className='grid-gap'> </div>
                    <div className='grid-main'>

                    </div>
                    <div className='grid-start'>
                        <div className='grid-1'></div> <div className='grid-1'></div>
                        <div className='grid-1-boxed'>
                            <div className='grid-1-text-white'>
                                The pursuit for effective use of space.
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
               
                    <Button buttonStyle='btn--outline' externalLink={ true} path = 'https://www.theonteo.com/' >See More...</Button>
                </div>
            </div>
        </div >

    )

}

export default LandingTitle
