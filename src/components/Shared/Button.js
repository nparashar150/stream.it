import styled from "styled-components"

export const Button = styled.button`
  padding: ${props => (props.padding ? props.padding : "1rem 2rem")};
  border-radius: ${props => (props.curve ? props.curve : ".5rem")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1.15rem")};
  color: ${props => (props.color ? props.color : props.theme.background)};
  background: ${props => props.theme.background};
  font-weight: ${props => props.bold && "600"};
  border: 4px solid ${props => props.theme.userBorderColor};
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 4px solid ${props => props.theme.font + "AA"};
  }
`
