import React, {useState} from 'react'

import {Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAdress, RestaurantPhoto} from './styles';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import Skeleton from '../Skeleton';

const RestaurantCard = ({restaurant, onClick}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <RestaurantTitle>
                    {restaurant.name}
                </RestaurantTitle>
                    <ReactStars count={5} edit={false} value={restaurant.rating} isHalf activeColor="orange" />
                <RestaurantAdress>
                    {restaurant.formatted_adress || restaurant.vicinity}
                </RestaurantAdress> 
            </RestaurantInfo>
            <RestaurantPhoto imageLoaded={imageLoaded} onLoad={() => setImageLoaded(true)} src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}       
        </Restaurant>
    )
}

export default RestaurantCard;
