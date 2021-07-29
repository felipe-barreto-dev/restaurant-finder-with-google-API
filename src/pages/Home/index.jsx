import React, {useState} from 'react';
import {Container, Search, Logo, Wrapper, CarouselTitle, Carousel} from './styles';
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import restaurante from '../../assets/restaurante-fake.png';
import {Card, Restaurant, Modal} from '../../components';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true
      };

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
                    <Input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
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
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
        </Container>;
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
    
    
}

export default Home;