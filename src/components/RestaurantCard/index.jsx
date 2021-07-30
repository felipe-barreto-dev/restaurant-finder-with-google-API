import React from 'react'

import {Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAdress, RestaurantPhoto} from './styles';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({restaurant}) => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>
                    {restaurant.name}
                </RestaurantTitle>
                    <ReactStars count={5} edit={false} value={restaurant.rating} isHalf activeColor="orange" />
                <RestaurantAdress>
                    {restaurant.formatted_adress || restaurant.vicinity}
                </RestaurantAdress> 
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} />
        </Restaurant>
    )
}

export default RestaurantCard;
