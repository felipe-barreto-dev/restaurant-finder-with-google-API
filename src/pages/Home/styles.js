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
    overflow-x: hidden;
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
    .variable-width {
        margin-right: 30px;
    }
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 5px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 19px;
    font-size: 14px;
    font-weight: normal;
`;

