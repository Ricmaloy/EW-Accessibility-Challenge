import React from 'react';

import { ReactComponent as KidsOpeningGifts } from '../../assets/EvilOpeningGifts.svg';

import { Container, Content, LeftSide, RightSide, Title, Text, Assign} from './styles';


const EvilCard = () => (
    <Container>
        <Content>
            <LeftSide>
                <KidsOpeningGifts/>
            </LeftSide>
            <RightSide>
                <Title>Ora ora ora, é você</Title>
                <Text>
                    Ouvi falar sobre você, acho que somos bastante parecidos não ? <br/>
                    Obviamente eu sou muito mais bonito, charmoso e elegante que você mas
                    isso não vem ao caso, acredito que compartilha do mesmo sentimento 
                    que meu quanto ao natal e sendo assim, lhe convido para juntar a mim
                    e destruirmos essa festividade e toda a alegria que ela causa nas
                    pessoas. Você deve me conhecer, e já sabe que, bem, eu ODEIO o natal
                    e quero que este seja o último natal da Terra. <br/>
                    Posso contar com você ???
                </Text>
                <Assign>Atenciosamente, Grinch !</Assign>
            </RightSide>
        </Content>
    </Container>
);

export default EvilCard;