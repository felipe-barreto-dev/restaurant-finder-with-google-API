import React from 'react'

import {Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAdress, RestaurantPhoto} from './styles';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>
                    Nome do Restaurante
                </RestaurantTitle>
                    <ReactStars count={5} edit={false} value={4} isHalf activeColor="orange" />
                <RestaurantAdress>
                    rua jose jose jose jose
                </RestaurantAdress> 
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} />
        </Restaurant>
    )
}

export default RestaurantCard;
