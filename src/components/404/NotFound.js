import styled from "styled-components"

export const NotFoundWrapper = styled.div`
    width: 100vw;
    height: 85vh;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const NotFoundHeading = styled.h1`
    font-size: 4rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const NotFoundInfo = styled.p`
    font-size: 1.25rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`