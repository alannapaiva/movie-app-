import React from 'react';
import { ScrollView } from 'react-native';

import { 
    Container, 
    SearchContainer, 
    Input, 
    SearchButton, 
    Title, 
    BannerButton, 
    Banner,
    SliderMovie
} from './styles';

import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';


function Home(){
    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer> 
                <Input 
                    placeholder="Ex. Vingadores"
                    placeholderTextColor = "#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#fff" />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title> Em Cartaz </Title>

                <BannerButton activeOpacity={0.8} onPress={ () => alert('TESTE')}>  
                    <Banner
                    resizeMethod="resize"
                    source={ {uri:'https://poltronanerd.com.br/wp-content/uploads/2018/11/poltrona-Marvel-Studios-The-First-10-Years-Banner.jpg'} }
                    />
                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem/>  }
                />

                <Title> Populares </Title>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem/>  }
                />

                <Title> Mais votados </Title>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem/>  }
                />

            </ScrollView>
        </Container>
    )
}

export default Home; 