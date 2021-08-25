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
                    <div className='grid-start'>
                        <div className='grid-1'>

                        </div>
                        <div className='grid-1'>

                        </div>
                        <div className='grid-1-boxed'>
                            <div className='grid-1-text'>
                                Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.
                            </div >
                        </div>
                    </div>
                    <div className='grid-start'>
                        <div className='grid-1'>

                        </div>
                        <div className='grid-1'>

                        </div>
                        <div className='grid-1'>

                        </div>
                    </div>
                    <div className='grid-start'>
                        <div className='grid-1'>

                        </div>
                        <div className='grid-1-boxed-black'>
                            <div className='grid-1-text-white'>
                                The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.
                            </div>
                        </div>
                        <div className='grid-1'>

                        </div>
                    </div>
                </div>
                <div className='grid-main'>
                    <div className='Title-heading-rotated'>
                        The Interior.
                    </div>
                </div>
            </div>




            <div className='Title-subtext'>
                Lorem Ipsum
            </div>

            <div className='Title-subtext'>
                This is the first website I have built from scratch and it is designed to expand my knowledge on frontend development.
                Some of the experiments include real time rendering of 3d browser backgrounds while making the website responsive for web and mobile.
                For the assets of the website - arnold renderer is being used for lights mapping the scene with the map being combined into a mesh.
            </div>
        </div>

    )
    /*
<div className='Title-subtext'>
    <Button buttonStyle='btn--outline'> Contact</Button>
</div>
*/
}

export default LandingTitle
