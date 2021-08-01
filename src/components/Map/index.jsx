import React, {useState, useEffect} from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';

import { setRestaurante, setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const {restaurants} = useSelector((state) => state.restaurants);
    const {google, query, placeId} = props;

    const [map, setMap] = useState(null);

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    useEffect(() => {
        if (placeId) {
            getRestaurantsById(placeId);
        }
    }, [placeId]);

    function getRestaurantsById(placeId) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurante(null));

        const request = {
            placeId, 
            fields: ['name','vicinity','formatted_phone_number','opening_hours']
        };

        service.getDetails(request, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurante(place))
            }
        })
    }

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([]));


        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results))
            }
        })
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([]));

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        })

    }

    const onMapReady = (_, map) => {
        setMap(map);
        searchNearby(map, map.center)
    }

    
    return (
        <Map google={google} centerAroundCurrentLocation
        onReady={onMapReady}
        onRecenter={onMapReady}
        >
            {restaurants.map((restaurant) => {
                return <Marker 
                key={restaurant.place_id} 
                name={restaurant.name} 
                position={{
                lat: restaurant.geometry.location.lat(),
                lng: restaurant.geometry.location.lng()    
                }}
                {...props}
                />
            })}
        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBoDsm4Z1LEu4Nwjo4QtiALtsjZi2ecpBA',
    language: 'pt-BR',
})(MapContainer);