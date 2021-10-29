import { useTabState } from 'reakit/Tab';
import angel from '../../assets/angel.svg';
import devil from '../../assets/devil.svg';

import { Container, ContentBox, Title, Tabs, TabItem, Content, ResultPainel } from './styles';

const Home = () => {
   const tab = useTabState();

   return (
    <Container>
        <ContentBox>
            <Title>Esse ano eu fui ...</Title>
            <Content>
                <Tabs aria-label='Tab Panel - React Accessibility' >

                    <TabItem
                        id='tab-1'
                        aria-label='Tab Item - Comportado ou Comportada'
                        active={tab.selectedId === 'tab-1'}
                        {...tab}
                    >
                        <span >Comportado(a)</span>
                    </TabItem>
                    <TabItem
                        id='tab-2'
                        aria-label='Tab Item - Malvado ou Malvada'
                        active={tab.selectedId === 'tab-2'}
                        {...tab}
                    >
                        <span> Malvado(a) </span>
                    </TabItem>

                </Tabs>
                    <ResultPainel
                        {...tab}
                        aria-label='Tab Panel - Anjinha Comportada'
                    >
                        <img src={angel} alt={angel} />
                    </ResultPainel>
                    
                    <ResultPainel 
                        {...tab}
                        aria-label='Tab Panel - Diabo Malvado'
                    >
                        <img src={devil} alt={devil} />
                    </ResultPainel>
            </Content>
        </ContentBox>
    </Container>
   )
};

export default Home;