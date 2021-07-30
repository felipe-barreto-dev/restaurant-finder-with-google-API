import styled from 'styled-components'

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    background-color: white;
    padding: 16px;
    border-left: 5px solid transparent;

    :hover {
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RestaurantTitle = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const RestaurantAdress = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: black;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;