import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'
function CardsItem(props)
{
    return (
        <>
            <li className = 'cards__item'>
                <Link className = 'cards__item__link' to= {props.path} >
                    <figure className = 'cards__item__pic-wrap' data-category = {props.label}>
                        <img 
                        src = {props.src}
                        className = "cards__item__img">
                        </img>
                    </figure>
                    <div className = "cards__item__info">
                        <h5 className = "cards__item__text">
                            {props.text}
                        </h5>
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
