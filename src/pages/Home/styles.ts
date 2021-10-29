import styled from 'styled-components';

interface ICardProps {
    color: string;
}

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

    @media(max-width: 1500px) {
        height: 80vh;
    }

    @media(max-width: 500px) {
        height: 80vh;
    }
`;

export const Title = styled.h2`
    font-family: 'NunitoRegular';
    font-family: 'Nunito', sans-serif;

    font-size: 32px;

    margin-bottom: 30px;

    text-align: center;

    @media(max-width: 1500px) {
        font-size: 28px;
    }

    @media(max-width: 800px) {
        font-size: 20px;
    }

    @media(max-width: 500px) {
        font-size: 14px;
        padding-bottom: 15px;
    }
`;

export const Content = styled.div`
    height: calc(100% - 80px);

    display: flex;
    justify-content: space-evenly;

    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Good = styled.a<ICardProps>`
    width: 40%;
    height: 100%;

    border-radius: 5px;

    background-color: #fbfbfb;
    
    text-decoration: none;
    border-color:  ${props => props.color};

    transition: all .3s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > span {
        font-family: 'NunitoRegular';
        font-family: 'Nunito', sans-serif;

        text-align: center;

        color: #000;

        font-size: 25px;

        margin-bottom: 50px;

        @media(max-width: 800px) {
            font-size: 20px;
            margin-bottom: 30px;
        }

        @media(max-width: 500px) {
            font-size: 12px;
            margin-bottom: 15px;
        }
    }

    > img {
        width: 250px;

        @media(max-width: 1500px) {
            width: 200px;
        }

        @media(max-width: 1200px) {
            width: 150px;
        }

        @media(max-width: 800px) {
            width: 120px;
        }

        @media(max-width: 800px) {
            width: 80px;
        }
    }

    :hover {
        //background-color: ${props => props.color};
        //box-shadow: 1px 1px 3px 0px ${props => props.color};
        border: 1px solid ${props => props.color};
    }

    @media(max-width: 800px) {
        width: 80%;
        margin-bottom: 30px;
    }
`;

export const Evil = styled.a<ICardProps>`
    width: 40%;
    height: 100%;

    border-radius: 5px;

    background-color: #fbfbfb;
    
    text-decoration: none;

    border-color:  ${props => props.color};

    transition: all .3s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > span {
        font-family: 'NunitoRegular';
        font-family: 'Nunito', sans-serif;

        text-align: center;

        color: #000;
        font-size: 25px;

        margin-bottom: 50px;

        @media(max-width: 800px) {
            font-size: 20px;
            margin-bottom: 30px;
        }

        @media(max-width: 500px) {
            font-size: 12px;
            margin-bottom: 15px;
        }
    }

    > img {
        width: 250px;

        @media(max-width: 1500px) {
            width: 200px;
        }

        @media(max-width: 1200px) {
            width: 150px;
        }

        @media(max-width: 800px) {
            width: 120px;
        }

        @media(max-width: 800px) {
            width: 80px;
        }
    }

    :hover {
        //background-color: ${props => props.color};
        //box-shadow: 1px 1px 3px 0px ${props => props.color};
        border: 1px solid ${props => props.color};
    }

    @media(max-width: 800px) {
        width: 80%;
    }
`;