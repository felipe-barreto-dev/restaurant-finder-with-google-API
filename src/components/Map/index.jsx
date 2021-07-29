import React, {useState, useEffect} from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
    const {google, query} = props;

    const [map, setMap] = useState(null);

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
            }
        })
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
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
        />
    )
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBoDsm4Z1LEu4Nwjo4QtiALtsjZi2ecpBA',
    language: 'pt-BR',
})(MapContainer);