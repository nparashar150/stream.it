import styled, { css } from "styled-components"

export const LandingWrapper = styled.div`
  width: 100%;
  height: 95vh;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 1rem 10vw;
  gap: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    padding: 15vh 5vw;
    margin: calc(5vh) 0 0 0;
    gap: 2rem;
    height: 100%;
  }
`
export const LandingHeading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  text-align: center;
  width: 100%;
  margin: -5rem 0 0 0;
  z-index: 5;
  color: ${props => props.theme.font};

  @media (max-width: 768px) {
    margin: 0;
    font-size: 4rem;
    width: 100%;
  }

  span {
    white-space: nowrap;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    -webkit-text-fill-color: ${props => props.theme.background};
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${props => props.theme.font};

    &:nth-of-type(2) {
      width: 100%;
      -webkit-text-fill-color: ${props => props.theme.font};
      -webkit-text-stroke-width: 0px;
    }
  }
`
export const LandingImageWrapper = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    padding: 0.5rem 5vw;
    width: 100%;
  }
`
export const AboutWrapper = styled.div`
  flex-direction: row;
  padding: 15vh 10vw;
  background-color: ${props => props.theme.font};
  outline: 4px solid ${props => props.theme.font};
  outline-offset: 2px;
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    border-radius: 0rem;
    padding: 10vh 5vw;
  }

  ${({ features }) =>
    features &&
    css`
      background-color: ${props => props.theme.background};
      border: none;
      outline: none;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      ${About} {
        padding-left: 1rem;
      }

      ${AboutInfo},
      ${AboutHeading} {
        color: ${props => props.theme.font};
      }
    `}
`
export const About = styled.div`
  width: 50%;
  margin-left: -1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 5vw;
  }
`
export const AboutInfo = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: left;
  color: ${props => props.theme.background};

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const AboutHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: left;
  color: ${props => props.theme.background};

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const AboutImageWrapper = styled.div`
  width: 50%;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`
export const FeatureInfo = styled.div`
  color: ${props => props.theme.font};

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const FeatureList = styled.div`
  padding: 1rem 0;
  font-size: 1.5rem;
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`
export const CircleOutline = styled.div`
  width: 20rem;
  height: 30rem;
  /* overflow: hidden; */
  background-color: ${props => props.theme.background};
  border: 6px solid ${props => props.theme.font + "50"};
  border-radius: 30rem;
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`
