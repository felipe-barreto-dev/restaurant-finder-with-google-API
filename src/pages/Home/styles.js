import styled from 'styled-components';

import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 20px;

`;

export const Logo = styled.img`
    width: 200px;
    margin-bottom: 16px;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #555;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin: 16px 0px;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;

