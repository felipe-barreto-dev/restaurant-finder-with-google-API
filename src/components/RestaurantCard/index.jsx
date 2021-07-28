import React from 'react'

import {Restaurant, RestaurantInfo, RestaurantTitle} from './styles';

const RestaurantCard = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>
                    Nome do Restaurante
                </RestaurantTitle>
            </RestaurantInfo>
        </Restaurant>
    )
}

export default RestaurantCard;
