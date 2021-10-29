import styled from 'styled-components';

import '../../animations/EvilAnimations.css';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #f7f7f7;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 550px) {
        height: unset;
    }
`;

export const Content = styled.div`
    width: 70%;
    height: 70vh;

    border-radius: 8px;

    padding: 30px 20px;

    background-color: #8cba51;

    display: flex;

    @media(max-width: 800px) {
        flex-direction: column;

        height: auto;
    }

    @media(max-width: 550px) {
        margin: 20px 0;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        width: 500px;

        @media(max-width: 1600px) {
            width: 400px;
        }

        @media(max-width: 1400px) {
            width: 350px;
        }

        @media(max-width: 1200px) {
            width: 300px;
        }

        @media(max-width: 1000px) {
            width: 230px;
        }

        @media(max-width: 550px) {
            width: 170px;
        }
    }

    @media(max-width: 800px) {
        width: 100%;

        margin-bottom: 20px;
    }
`;

export const RightSide = styled.div`
    width: 50%;

    margin: 30px 40px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    color: #fff;

    @media(max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;

export const Title = styled.h2`
    font-size: 45px;

    margin-bottom: 20px;

    font-family: 'GrinchedRegular';
    font-family: 'Metamorphous', cursive;

    @media(max-width: 1600px) {
        font-size: 30px;
    }

    @media(max-width: 1200px) {
        font-size: 20px;
    }

    @media(max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const Text = styled.p`
    font-size: 20px;

    margin-bottom: 20px;

    font-family: 'LangarRegular';
    font-family: 'Langar', cursive;

    @media(max-width: 1600px) {
        font-size: 16px;
    }

    @media(max-width: 1400px) {
        font-size: 14px;
    }

    @media(max-width: 1000px) {
        font-size: 12px;
    }

    @media(max-width: 550px) {
        font-size: 12px;
    }
`;

export const Assign = styled.span`
    font-size: 35px;

    font-family: 'GrinchedRegular';
    font-family: 'Metamorphous', cursive;

    @media(max-width: 1600px) {
        font-size: 22px;
    }

    @media(max-width: 1200px) {
        font-size: 16px;
    }

    @media(max-width: 1000px) {
        font-size: 14px;
    }

    @media(max-width: 550px) {
        font-size: 12px;
    }
`;
