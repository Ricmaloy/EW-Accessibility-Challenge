import { TabList, Tab, TabPanel } from 'reakit/Tab';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #e7e7e7;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentBox = styled.div`
    width: 70%;
    height: 70vh;

    border-radius: 8px;

    padding: 30px 20px;

    background-color: #fff;

    display: flex;
    flex-direction: column;

    @media(max-width: 1500px) {
        height: 80vh;
    }

    img {
        width: 250px;

        @media(max-width: 1500px) {
            width: 200px;
        }
    }
`;

export const Title = styled.h2`
    font-family: 'Nunito', sans-serif;

    padding-bottom: 15px;
    font-size: 32px;
    text-align: center;

    @media(max-width: 1500px) {
        font-size: 28px;
    }

    @media(max-width: 800px) {
        font-size: 20px;
    }

    @media(max-width: 500px) {
        font-size: 14px;
    }
`;

export const Tabs = styled(TabList)`
    display: flex;

    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

interface TabItemProps {
    active: boolean,
}

export const TabItem = styled(Tab)<TabItemProps>`
    width: 50%;
    height: fit-content;

    padding: 15px 0;
    border-radius: 5px;
    background-color: #fbfbfb;
    text-decoration: none;
    transition: all .3s;

    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        font-family: 'Nunito', sans-serif;
        text-align: center;
        color: #000;
        font-size: 25px;

        @media(max-width: 800px) {
            font-size: 20px;
        }

        @media(max-width: 500px) {
            font-size: 15px;
        }

    }

    &:first-child {
        ${props => props.active && `
            font-weight: bold;
        `}
    }

    &:last-child {
        ${props => props.active && `
            font-weight: bold;
        `}
    }

    @media(max-width: 800px) {
        width: 80%;
    }
`;

export const Content = styled.div`
    flex: 1;
    background: #fbfbfb;

    display: flex;
    flex-direction: column;
`

export const ResultPainel = styled(TabPanel)`
   display: flex;
   justify-content: center;
   align-items: center;

   flex: 1;
`
