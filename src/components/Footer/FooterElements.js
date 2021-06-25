import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

export const Container = styled.div`
    height: 35vh;
    width: 100vw;
    padding: 80px 60px;
    background: var(--secondary);
    
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: var(--primary);
        transition: 200ms ease-in;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const Facebook = styled(FaFacebookF)`
    margin-right: 1rem;
`;
export const Twitter = styled(FaTwitter)`
    margin-right: 1rem;
`;
export const Youtube = styled(FaYoutube)`
    margin-right: 1rem;
`;