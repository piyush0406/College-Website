import styled from 'styled-components'
import { CustomButtonOne } from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdArrowRoundForward } from "react-icons/io";

export const Section =  styled.section`
    height: 100%;
    width: 100vw;
    margin-bottom: 10rem;
`;
export const MainTilte = styled.div`
    p {
        padding: 1rem 3rem;
        font-size: 5rem;
        font-weight: 700;
        color: var(--secondary);        
    }

    @media screen and (max-width: 768px) {
        p {
            font-size:4rem;
        }
    }

    @media screen and (max-width: 480px) {
        p {
            padding: 1.5rem;
            font-size:3rem;
        }
    }
`;
export const Container = styled.div`
    height:100% ;
    overflow: hidden;
    color: var(--secondary);
`;
export const ColumnLeft = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    background-color: transparent;
    opacity: 0;
    visibility:hidden;
    transition: all 0.5s ease;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 20%;

    @media screen and (max-width: 768px) {
        width: 25%;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;
export const ColumnRight = styled.div`   
    height: 100%;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;
export const SectionA = styled.div`   
    height: auto;
    width: 100%;
`;
export const RightContainer = styled.div`   
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const ExpLink = styled.div`
    margin: 0 2rem 0.5rem 1rem;
    cursor: pointer;
    transition: all 1s ease-in-out;
    background-color: ${({ active }) => (active ? 'var(--primary)' : '')}; ;
    font-weight: 600;
    p {
        margin: 1rem 0;
        display: inline-block;
        list-style: none;
        text-transform: uppercase;
    }
`;

export const ExpLinkIcon = styled.div`
    display: inline-block;
    margin: 0 10px ;
    font-size: 1.5rem;

`;

export const SectionTop = styled.div`
    height: 50vh;
    margin: 6rem;
    position: relative;

    @media screen and (max-width: 768px){
        margin: 0rem;
    }

    @media screen and (max-width: 480px){
        margin: 1rem;
    }
`;

export const ExpImg = styled.img`
    height: 50vh;
    width: 60vw;
    object-fit: cover;

    @media screen and (max-width: 768px){
        width: 70vw;
    }

    @media screen and (max-width: 480px){
        width: 90vw;
    }    
`;

export const ExpTitle = styled.div`
    background-color: white;
    position: absolute;
    bottom: -1px;
    left: 0px;

    p {
        font-weight: 600;
        padding-right:20px;
        font-size: 4rem;
    }

    @media screen and (max-width: 480px){
        p {
            font-size: 2rem;
        }
    }
`;

export const SectionBottom = styled.div`
    padding: 2rem;
    position: relative;
`;

export const ExpContent = styled.div`
    p{
        margin-left: 10rem;
        width: 40vw;
        line-height: 2;
        font-weight: 500;
    }

    @media screen and (max-width: 768px){
        p {
            margin-left: 2rem;
            width: 65vw;
        }
    }

    @media screen and (max-width: 480px){
        p {
            margin-left: 0;
            width: 90vw;
        }
    }
    
`;

export const ExpButton = styled.div`
    width: 20vw;
    margin-left: 2rem;

    @media screen and (max-width: 480px){
        margin-left: 0;
        font-size: 10px !important;
    }
`;

export const Button = styled(CustomButtonOne)`
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;

export const ArrowForward = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 0.5rem;
`;