import React, {useState} from 'react';
import {Container, Search, Logo, Wrapper, CarouselTitle, Carousel} from './styles';
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {useSelector} from 'react-redux';

import restaurante from '../../assets/restaurante-fake.png';
import {Card, Restaurant, Modal, Map} from '../../components';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
    const {restaurants} = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true
      };

    function handleKeyPress(e) {
        if (e.key == 'Enter') {
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
                    <Card photo={restaurante} title="nome do restaurante" />
                    <Card photo={restaurante} title="nome do restaurante" />
                    <Card photo={restaurante} title="nome do restaurante" />
                    <Card photo={restaurante} title="nome do restaurante" />
                    <Card photo={restaurante} title="nome do restaurante" />
                    <Card photo={restaurante} title="nome do restaurante" />
                </Carousel>
            </Search>
                {restaurants.map((restaurant) => {
                    return <Restaurant key={restaurant.place_id} restaurant={restaurant} />
                })}
        </Container>;
        <Map query={query} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
    
    
}

export default Home;