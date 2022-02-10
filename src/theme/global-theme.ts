import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  background: "#FFF5F7",
  font: "#16162C",
  offline: "#16162C40",
  online: "#16162Ca6",
  userBorderColor: "#16162C40",
}

export const darkTheme = {
  background: "#16162C",
  font: "#FFFFFF",
  offline: "#3ee0cf80",
  online: "#40E0D0",
  userBorderColor: "#ffffff40",
}

interface GlobalThemeProps {
  background: string
  font: string
  offline: string
  online: string
  userBorderColor: string
}

export const GlobalStyle = createGlobalStyle<{ theme: GlobalThemeProps }>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: all 0.375 ease-in-out;
  }
  body {
    background-color:  ${props => props.theme.background};
    color: ${props => props.theme.font};
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.font};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.font + "AA"};
  }
  ::-moz-selection {
    background: ${props => props.theme.font + "25"};
  }
  ::selection {
    background: ${props => props.theme.font + "25"};
  }
`
