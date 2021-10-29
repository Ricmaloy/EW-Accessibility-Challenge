import React from 'react';

import { ReactComponent as KidsOpeningGifts } from '../../assets/GoodOpeningGifts.svg';

import { Container, Content, LeftSide, RightSide, Title, Text, Assign} from './styles';

const GoodCard = () => (
    <Container>
        <Content>
            <LeftSide>
                <Title>Ho Ho Ho, bom menino(a)</Title>
                <Text>
                    Parece que você se comportou bastante nesse ano, não foi ? <br/>
                    O espírito do Natal é o espírito do amor, da generosidade e da bondade. 
                    Ele ilumina a janela da imagem da alma, nós olhamos para este mundo 
                    cheio de vida e nos tornamos mais interessados nas pessoas do que nas 
                    coisas. O Natal é o espírito de dar sem um pensamento de obter. 
                    É felicidade porque vemos alegria nas pessoas. É nos esquecermos e 
                    encontrarmos tempo para os outros. É descartar as coisas sem sentido e 
                    sublinhar os verdadeiros valores.
                    Abra seu coração, sonhe, deseje, ame, sorria, fique feliz, volte a ser 
                    criança. Desejo à você um Natal cheio de paz, amor, felicidades e boas
                    festas. <br/>
                    PS: Seu presente está chegando... ho ho ho
                </Text>
                <Assign>Feliz Natal, Papai Noel !</Assign>
            </LeftSide>
            <RightSide>
                <KidsOpeningGifts/>
            </RightSide>
        </Content>
    </Container>
);

export default GoodCard;