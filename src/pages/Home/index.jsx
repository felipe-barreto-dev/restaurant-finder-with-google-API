import React, {useState} from 'react';
import {Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent} from './styles';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {useSelector} from 'react-redux';

import restaurante from '../../assets/restaurante-fake.png';
import {Card, Restaurant, Modal, Map} from '../../components';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);

    const handleOpenedModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true);
        console.log(restaurantSelected)
    }

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
      };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return <Wrapper>
        <Container>
            <Search>
                <div>
                    <Logo src={logo} alt="logo da plataforma" />
                </div>
                <TextField
                label='Pesquisar'
                outlined
                //onTrailingIconSelect={() => this.setInputValue({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                    <Input value={inputValue} 
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setInputValue(e.currentTarget.value)} />
                </TextField>
                <CarouselTitle>Na Sua Área</CarouselTitle>
                <Carousel {...settings}>
                    {restaurants.map((restaurant) => {
                        return <Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
                    })}
                </Carousel>
            </Search>
                {restaurants.map((restaurant) => {
                    return <Restaurant key={restaurant.place_id} restaurant={restaurant} onClick={() => handleOpenedModal(restaurant.place_id)} />
                })}
        </Container>;
        <Map query={query} placeId={placeId} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
            <div>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.vicinity}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora :)' : 'Fechado no momento :('}</ModalContent>
            </div>
        </Modal>
    </Wrapper>
    
    
}

export default Home;