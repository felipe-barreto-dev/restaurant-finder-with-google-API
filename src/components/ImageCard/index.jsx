import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton';

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    margin-right: 10px;
`;

const Title = styled.span`
    color: white;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 16px;
`;

const ImageCard = ({photo, title}) => {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(
        () => {
            const image = new Image();
            image.src = photo;
            image.onload = () => setImageLoaded(true);
        }, [photo]
    );

    return <>
    {imageLoaded ? (
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
    ) 
    : (
        <Skeleton width="90px" height="90px" />
    ) 
    } 
    </> 
};

export default ImageCard;