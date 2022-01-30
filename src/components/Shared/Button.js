import styled, { css } from "styled-components"

export const Button = styled.button`
  padding: ${props => (props.padding ? props.padding : "1rem 2rem")};
  border-radius: ${props => (props.curve ? props.curve : ".5rem")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1.15rem")};
  color: ${props => (props.color ? props.color : props.theme.background)};
  background: ${props => props.theme.background};
  font-weight: ${props => (props.bold ? props.bold : "500")};
  border: 4px solid
    ${props => (props.hoverBg ? props.hoverBg : props.theme.userBorderColor)};
  transition: 0.375s all ease-in-out;
  filter: ${props =>
    props.dropShadow &&
    `drop-shadow(0 0 10px ${props => props.theme.font + "35"})`};

  ${({ zIndex }) =>
    zIndex &&
    css`
      z-index: ${props => (props.zIndex ? props.zIndex : 1)};
    `}

  &:hover,
  &:focus {
    border: 4px solid
      ${props => (props.hoverBg ? props.hoverBg : props.theme.font + "AA")};
  }
`
