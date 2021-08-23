import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'
function CardsItem(props)
{
    return (
        <>
            <li className = 'cards__item'>
                <Link className = 'cards__item__link' to= {props.path} >
                <div className = "cards__item__color">
                    <figure className = 'cards__item__pic-wrap'>
                        <img 
                        src = {props.src}
                        className = "cards__item__img" alt="">
                        </img>
                    </figure>      
                    </div>
                    <div className = "cards__item__info">
                        <h5 className = "project-title">
                            {props.text}
                        </h5>
                        <div class="project-line"></div>
                        <h5 className = "cards__item__information">
                            {props.information}
                        </h5>
                        <div className = "cards__item__icon__container">
                            <i class={ props.icon1 }></i>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardsItem;
