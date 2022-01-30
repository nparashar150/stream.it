import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const MovieInfoWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  gap: 2rem;
  flex-direction: row;
  padding: 2rem;

  @media (max-width: 768px) {
    margin-top: calc(10vh + 2rem);
    padding: 0 2rem 2rem 2rem;
    gap: 0.5rem;
  }
`
export const MovieInsightsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 0 0 0.75rem;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
export const MovieStory = styled.p`
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  width: 100%;
  font-weight: 600;
  color: ${props => props.theme.color};

  b {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const MovieInsights = styled.p`
  font-size: 1.15rem;
  color: ${props => props.theme.font};
  font-weight: 600;
  width: 25vw;
  text-align: left;
  margin-top: -1rem;

  ${({ description }) =>
    description &&
    css`
      padding-top: 1rem;
    `}

  ${({ genre }) =>
    genre &&
    css`
      color: orange;
    `}

    ${({ rating }) => rating && css``}

    @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`
export const MovieHeading = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.font};
  font-weight: 800;
  text-align: left;
  width: 100%;
  padding: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 2.75rem;
    padding: 1.5rem 0 1.5rem 0.25rem;
  }
`
export const MovieImage = styled(GatsbyImage)`
  outline-offset: 2px;
  outline: 4px solid ${props => props.theme.font + "AA"};
  border-radius: 0.75rem;
`
export const GoBack = styled.div`
  width: 100%;
  font-size: 1.15rem;
  cursor: pointer;
  font-weight: 700;
  padding: 0 0 0 1rem;
  color: ${props => props.theme.font};
  color: orange;

  @media (max-width: 768px) {
    display: none;
  }
`
