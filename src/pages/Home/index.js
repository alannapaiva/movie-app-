import React, { useState, useEffect } from 'react';
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

import api, {key} from '../../services/api';
import { getListMovies } from '../../utils/movie';

function Home(){

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(()=>{
        let isActive = true;

    async function getMovies(){

        const [nowData, popularData, topData] = await Promise.all( [
            api.get('/movie/now_playing', {
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            }),
            api.get('/movie/popular', {
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            }),
            api.get('/movie/top_rated', {
                params:{
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            }),

        ])
        
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(5, topData.data.results);

        setNowMovies(nowList)
        setPopularMovies(popularList)
        setTopMovies(topList)


        }

        getMovies();

    }, [])


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
                    data={nowMovies}
                    renderItem={ ({ item }) => <SliderItem data={item} />}
                    keyExtractor ={ (item) => String(item.id) }
                />

                <Title> Populares </Title>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    renderItem={ ({ item }) => <SliderItem data={item} />}
                    keyExtractor ={ (item) => String(item.id) }
                />

                <Title> Mais votados </Title>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies}
                    renderItem={ ({ item }) => <SliderItem data={item} />}
                    keyExtractor ={ (item) => String(item.id) }
                />

            </ScrollView>
        </Container>
    )
}

export default Home; 