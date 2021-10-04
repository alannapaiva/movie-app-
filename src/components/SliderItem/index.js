import React from "react";


import { 
  Container,
  BannerItem,
  Title,
  RateContainer,
  Rate
} from './style';
import {Ionicons} from '@expo/vector-icons';


function SliderItem(){
  return(
    <Container activeOpacity={0.7}>
      <BannerItem 
        source={{uri: 'https://i.pinimg.com/236x/bf/2e/91/bf2e91ff2203add4e60dd8b913135698--marvel-dc-comics-poster-marvel.jpg'}}
      />

      <Title numberOfLines={1}> Doutor Estranho</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color= "#E7A74e" /> 
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem;