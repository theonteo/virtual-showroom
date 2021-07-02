import react from "react";

//store project related images
import CardImg from '../images/img-9.jpg'
import CardImg2 from '../images/img-8.jpg'
import CardItem from "./CardItem"
import './Cards.css'
function Projects()
{
    return (
    <>
        <div className = "cards_container">
            <div className = 'cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem 
                        src={CardImg}
                        text='Project1'
                        information='Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         />
                          <CardItem 
                        src={CardImg}
                        text='Project2'
                        information='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                        label='Personal'
                        path='/services'
                        icon1='fab fa-github'
                         /> 
                         </ul>
                         
                </div>
        </div>
    </>);
}

export default Projects;