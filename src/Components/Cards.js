import React from 'react';
import CardItem from './CardItem';
import CardImg from '../images/img-9.jpg'
import CardImg2 from '../images/img-8.jpg'
function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check this out</h1>
            <div className = 'cards_container'>
                <div className = 'cards__wrapper'>
                    <ul className='cards__items'>
                        
                        <CardItem 
                        src={CardImg}
                        text='Explore different locations'
                        label='Adventure'
                        path='/services'
                         />
                        <CardItem 
                        src={CardImg2}
                        text='Explore different locations'
                        label='Leisure'
                        path='/services'
                         />
                        <CardItem 
                        src={CardImg2}
                        text='Explore different locations'
                        label='Leisure'
                        path='/services'
                         />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src={CardImg2}
                        text='Explore different locations'
                        label='Leisure'
                        path='/services'
                         />
                        <CardItem 
                        src={CardImg2}
                        text='Explore different locations'
                        label='Leisure'
                        path='/services'
                         />
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
