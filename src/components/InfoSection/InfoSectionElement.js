import styled from 'styled-components'
import { ImArrowRight2 } from "react-icons/im";

export const Section =  styled.section`
    height: 100%;
    width: 100vw;
`;
export const Container = styled.div`

    @media screen and (max-width: 1280px) {
        transform: scale(0.8);
    }

    @media screen and (max-width: 1024px) {
        transform: scale(0.7);
    }

    @media screen and (max-width: 768px) {
        transform: scale(0.5);
    }

    @media screen and (max-width: 480px) {       
        transform: scale(0.8);
        
    }
    
`;
export const Card = styled.div`
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    height: 25rem;
    margin-bottom: 5rem;
    width: 25rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    p {
        padding-top: 0.1rem;
        color: var(--secondary);
        font-size: 1.5rem;
        font-weight: 600;
        border-top: 8px solid;
        border-color: var(--secondary);
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
    }
`;
export const CardFirst = styled.div`
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    height: 25rem;
    margin-bottom: 3rem;
    width: 25rem;
    border: 8px solid;
    border-color: var(--secondary);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    p {
        position: absolute;
        top:45%;
        left:25%;
        color: var(--secondary);
        font-size: 2rem;
        height: 100%;
        font-weight: 800;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
    }
`;
export const CardTop = styled.div`
    height: 100%;
`;

export const CardImg = styled.img`
    height: 100%;
`;
export const CardContent = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 1rem;
    top: 0;
    opacity: 0;
    background: var(--secondary);
    transition: all 0.5s ease-in-out;

    &:hover {
        opacity: 1;
    }

    p {
        font-size: 1rem;
        color: white;
        
    }
`;

export const KnowMore = styled.div`
    position: absolute;
    bottom: 0;
    width: 95%;
    cursor: pointer;

    #icon { 
        position: absolute;
        right:2rem;
        top:5px;
    }

    p {
        text-transform: uppercase;
        font-size: 1rem;
    }
`;

export const Icon = styled(ImArrowRight2)`
`;