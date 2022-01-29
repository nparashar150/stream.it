import styled, { css } from "styled-components"

export const MovieListWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  gap: 2rem;
  flex-direction: row;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 0 5vw;
    margin-top: calc(10vh + 1rem);
  }
`

export const MovieImageRating = styled.p`
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 700;
`

export const MovieImageWrapper = styled.div`
  overflow: hidden;
  transition: 0.375s all ease-in-out;
`

export const MovieItemHeading = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.background};
  z-index: 15;
  font-weight: 800;
  position: absolute;
  transform: translateY(-50%);
  top: -10%;
  padding: 0 30px;
  width: 100%;
  transition: 0.375s all ease-in-out;
`
export const MovieItemInfo = styled.p`
  font-size: 1.15rem;
  color: ${props => props.theme.background};
  z-index: 15;
  font-weight: 600;
  position: absolute;
  transform: translateY(-50%);
  top: -50%;
  transition: 0.375s all ease-in-out;
  padding: 95px 35px 0 35px;
  width: 100%;
  cursor: pointer;
  opacity: 0;

  ${({ description }) =>
    description &&
    css`
      padding: 75% 35px 0 35px;
      top: -100%;
      text-align: left;
      height: 300px;
      font-size: 1rem;
    `}

  ${({ genre }) =>
    genre &&
    css`
      padding: 5px 35px 0 35px;
      text-align: left;
      color: orange;
    `}

    ${({ rating }) =>
    rating &&
    css`
      padding: 50px 35px 0 35px;
      text-align: left;
      top: -50%;
    `}
`
export const MovieItemWrapper = styled.div`
  display: block;
  width: 280px;
  height: 420px;
  background: ${props => props.theme.background};
  border-radius: 0.75rem;
  padding: 0;
  margin: 0;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  z-index: 10;
  transition: 0.375s all ease-in-out;
  outline-offset: 2px;
  outline: 4px solid ${props => props.theme.font + "AA"};

  &:hover,
  &:focus {
    img {
      transition: 0.375s all ease-in-out;
      filter: grayscale(10%) brightness(50%) saturate(90%);
    }

    ${MovieItemHeading} {
      top: 15%;
      opacity: 1;
    }

    ${MovieItemInfo} {
      top: 22%;
      opacity: 1;
    }

    ${MovieImageWrapper} {
      filter: blur(2px);
    }
  }
`
