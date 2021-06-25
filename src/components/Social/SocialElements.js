import styled from "styled-components";
import social from "../../images/social.jpg"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

export const Section = styled.section`
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 1024px) {
        height: 60vh;
    }

    @media screen and (max-width: 480px) {
        
    }
`;
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0 5rem;

    @media screen and (max-width: 1024px) {
        padding: 0 2rem;
        height: 60vh;
    }

    @media screen and (max-width: 480px) {
        
    }
`;
export const LeftContainer = styled.div`    
    height: 60vh;
    background: #f7b537;

    @media screen and (max-width: 1024px) {
        height: 40vh;
        width: 40vw;
    }
    @media screen and (max-width: 768px) {
        height: 40vh;
        width: 40vw;
    }

    @media screen and (max-width: 480px) {
        
    }
`;
export const RightContainer = styled.div`
    margin-top: 5rem;
    margin-left: -5rem;
    height: 60vh;
    background-image: url(${social});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 1024px) {
        height: 40vh;
        margin-left: 0rem;
    }
    @media screen and (max-width: 768px) {
        height: 35vh;
        margin-left: -2rem;
    }

    @media screen and (max-width: 480px) {
       
    }
`;

export const Header = styled.div`
    font-size:4rem;
    width: 80%;
    padding: 3rem;
    padding-top: 5rem;
    line-height: 1;
    font-weight: 800;

    p{
        color: var(--secondary);
    }

    span{
        color: white;
    }

    @media screen and (max-width: 768px) {
       font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
       
    }
    
`;
export const SocialIcons = styled.div`
    color: var(--secondary);
    padding: 3rem;
    font-size: 1.5rem;

    span{
        margin-right: 1rem;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
       font-size: 1rem;
       padding: 3rem;
       padding-top: 1rem;
    }

    @media screen and (max-width: 480px) {
       
    }

`;
export const Hashtags = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    transform: translateY(50%);
`;
export const Tag = styled.div`
    display: inline;
    margin: 0 2rem;
    font-size: 2rem;
    font-weight: 800;
    color: white;
    text-shadow: 2px 2px 10px black;
    border-bottom: 6px solid #f7b537;

    @media screen and (max-width: 1024px) {
       font-size: 1.5rem;
       border-width: 3px;
    }
    
    @media screen and (max-width: 768px) {
       font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
       
    }
`;

export const Facebook = styled(FaFacebookF)``;
export const Twitter = styled(FaTwitter)``;
export const Youtube = styled(FaYoutube)``;