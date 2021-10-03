import React from 'react';
import { ScrollView } from 'react-native';

import { 
    Container, 
    SearchContainer, 
    Input, 
    SearchButton, 
    Title, 
    BannerButton, 
    Banner 
} from './styles';

import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';


function Home(){
    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer> 
                <Input 
                    placeholder="Ex. Vingadores"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#fff" />
                </SearchButton>
            </SearchContainer>

            <ScrollView>
                <Title> Em Cartaz </Title>

                <BannerButton activeOpacity={0.8} onPress={ () => alert('TESTE')}>  
                    <Banner
                    resizeMethod="resize"
                    source={ {uri:'https://poltronanerd.com.br/wp-content/uploads/2018/11/poltrona-Marvel-Studios-The-First-10-Years-Banner.jpg'} }
                    />
                </BannerButton>
            </ScrollView>
        </Container>
    )
}

export default Home; 