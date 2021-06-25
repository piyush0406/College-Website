import styled from 'styled-components'
import { CustomButtonOne } from '../Button/Button'

export const Button =styled(CustomButtonOne)`
    
    @media screen and (max-width: 768px) {
        width: 15px;
        padding: 2px;
        height: 40px;        
    }
`;

export const Section =  styled.section`
    height: 80vh;
    width: 100vw;

    @media screen and (max-width: 480px) {
        margin-bottom: 10rem;
    }

`;
export const Container =  styled.div`
    overflow: hidden;
`;
export const MainTilte = styled.div`

    p {
        padding: 3rem;
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
            font-size:2.5rem;
        }
    }
`; 
export const ColumnLeft = styled.div`
    padding: 3rem;
    
    p{
        font-size: 2rem;
        color: var(--secondary);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem;
        padding-top: 0;
        p {
            font-size:1.5rem;
        }
    }

    @media screen and (max-width: 480px) {
        p {
            font-size:1.2rem;
        }
    }
`;
export const ColumnRight = styled.div`
    height: 30rem;
    width: 70vw;
    display: flex;
    flex-direction: row;    
    overflow-y: hidden;
    overflow-x: scroll;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left:-5rem ;
    }

    @media screen and (max-width: 480px) {
        height: 90%;
        margin-left:1rem ;
        width:92%;
    }

    ::-webkit-scrollbar { 
        height: 10px;
        border-bottom: 10px;
    }
    ::-webkit-scrollbar-track {
        border-bottom: 3px solid var(--primary);   
    }
    ::-webkit-scrollbar-thumb {
        background: var(--primary);
        font-size: 10rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #d9aa00;
    }
`;

export const Cards =  styled.div`
    height: 30rem ;
    display: flex;

    @media screen and (max-width: 768px) {
        padding: 0;
    }

    @media screen and (max-width: 480px) {
        
    }
`;

export const Card =  styled.div`
    /* border: 1px solid;
    border-color: #e6e6e6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
    margin-right: 1rem;
    cursor: pointer;
    width: 20rem !important;
    border-top: 0.9rem solid transparent;
`;

export const CardImg =  styled.img`
    object-fit: cover;
    text-align: center;
    height: 20rem;
    width: 20rem;
`;
export const CardTitle =  styled.div`
    color: var(--primary);
    padding-top: 0.8rem;
    font-weight: 800;

    p {
        margin-bottom: 0;
    }
       
`;
export const CardContent =  styled.div`
    color: var(--secondary);
    font-weight: 600;
    font-size: 1.5rem;   

    @media screen and (max-width: 480px) {
        font-size: 1.3rem ;
    } 
`;

export const CardTop = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const CardDate = styled.div`
    position: absolute;
    left: 50%;
    padding: 1px 8px;
    text-transform: uppercase;
    transform: translateX(-50%);
    top: -10px;
    height: 1.4rem;
    font-weight: 600;
    font-size: 0.8rem;
    z-index: 10;
    background-color: #b61c21;
    color: white;
`;