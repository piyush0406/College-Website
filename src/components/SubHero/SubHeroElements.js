import styled from 'styled-components'


export const Section =  styled.section``;
export const Container = styled.div`
    padding: 1rem 1rem;
`;
export const Box = styled.div`    
    width: 100%;

    @media screen and (max-width: 480px) {
        margin-bottom: 0.5rem;
    }
`;
export const BoxItem = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    color: var(--secondary);

    p{
        font-size: clamp(0.2rem, 3vw, 0.8rem);
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 0.5rem;
    }
`;

export const BoxTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
`;

export const BoxIcon = styled.div`
    font-size: 5rem;
    color: var(--primary) !important;
`;