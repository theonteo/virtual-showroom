//store project related images
import CardImg from '../images/img-2.jpg'
import CardImg2 from '../images/img-3.jpg'
import CardImg3 from '../images/img-4.jpg'
import CardItem from "./CardItem"

import ProjectCard from "./ProjectCard";

function Projects()
{
    return (
        <>
        <ProjectCard>
        </ProjectCard>
        <div class="project-label">A collection of</div>
      <h4 class="project-title">Noteworthy Projects</h4> 
      <div class="project-line"></div>
        <div className = "cards_container">
            <div className = 'cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem 
                        src={CardImg}
                        text='Multiplayer UDP P2P'
                        information='A multiplayer game which uses Winsock for communication between different clients.Primarily in charge of base engine and Networking setup.'
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         />
                          <CardItem 
                        src={CardImg2}
                        text='Project2'
                        information=''
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         /> 
                          <CardItem 
                        src={CardImg3}
                        text='Project3'
                        information=''
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         /> 
                         </ul>
                         
                </div>
                <div className = 'cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem 
                        src={CardImg}
                        text='Multiplayer UDP P2P'
                        information='A multiplayer game which uses Winsock for communication between different clients.Primarily in charge of base engine and Networking setup.'
                        label='Personal'
                        path='/project-simple'
                        icon1='fab fa-github'
                         />
                          <CardItem 
                        src={CardImg2}
                        text='Project2'
                        information=''
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         /> 
                          <CardItem 
                        src={CardImg3}
                        text='Project3'
                        information=''
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         /> 
                         </ul>
                         
                </div>
        </div>
        </>
    );
    /*
    return (
    <>
        
    </>);
    */
}

export default Projects;