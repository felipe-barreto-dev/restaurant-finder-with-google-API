export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
    SET_RESTAURANT: 'restaurant/SET_RESTAURANT',
};

const initialState = {
    restaurants: [],
    restaurantSelected: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_RESTAURANTS:
            return { ... state, restaurants: action.payload}
        case Types.SET_RESTAURANT:
            return { ... state, restaurantSelected: action.payload}
        default:
            return state;
    }
}

export function setRestaurants(restaurants) {
    return {
        type: Types.SET_RESTAURANTS,
        payload: restaurants,
    };
};

export function setRestaurante(restaurant) {
    return {
        type: Types.SET_RESTAURANT,
        payload: restaurant,
    };
};