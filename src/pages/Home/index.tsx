import React from 'react';

import angel from '../../assets/angel.svg';
import devil from '../../assets/devil.svg';

import { Container, ContentBox, Title, Content, Good, Evil } from './styles';

const Home = () => (
    <Container>
        <ContentBox>
            <Title>Esse ano eu fui um(a) ...</Title>
            <Content>
                <Good 
                  href="/Good"
                  color="#bce6eb"

                >
                    <span> bom menino / <br/> boa menina</span>
                    <img src={angel} alt={angel} /> 
                </Good>
                <Evil 
                  href="/Evil"
                  color="#f05454"
                >
                    <span> menino mau / <br/> menina má </span>
                    <img src={devil} alt={devil} /> 
                </Evil>
            </Content>
        </ContentBox>
    </Container>
);

export default Home;