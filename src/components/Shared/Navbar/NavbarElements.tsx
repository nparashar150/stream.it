import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "../Button"
import { FiMenu } from "react-icons/fi/index"

export const NavbarWrapper = styled.nav`
  height: 10vh;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 100;
  padding: 1rem 7vw 1rem 7vw;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  background: ${props => props.theme.background};

  @media (max-width: 768px) {
    position: fixed;
    top: 0%;
    padding-top: 1rem;
    flex-wrap: wrap;
    height: auto;
    flex-direction: row;
    width: 100vw;
    padding: 1rem 1rem 1rem 1rem;
    justify-content: center;
  }
`

interface DivProps {
  animatedNav: boolean
}

export const NavLinkWrapper = styled.div<{ animateNav: boolean }>`
  width: 50%;
  flex-direction: row;
  transition: 0.375s all ease-in-out;
  z-index: 1;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    gap: 1rem;
    padding: 1rem 0 0 0;
    overflow: hidden;
    max-height: ${({ animateNav }) => (animateNav ? "500px" : "0")};
    margin-top: ${({ animateNav }) => (animateNav ? "0px" : "-10px")};
    flex-direction: column;
  }
`

export const NavbarLinks = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.font};
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;

  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: ${props => props.theme.font + "CC"};
  }
`
export const NavbarLinksAnchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.font};
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;

  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: ${props => props.theme.font + "CC"};
  }
`
export const NavbarLogin = styled(Button)`
  color: ${props => props.theme.font};

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.font};
  }
`
export const NavbarMenu = styled(FiMenu)`
  display: none;
  width: 2.25rem;
  height: 2.25rem;
  size: 2rem;
  cursor: pointer;

  color: ${props => props.theme.font};
  @media (max-width: 768px) {
    display: block;
    z-index: 5;
    margin-left: 60%;
  }
`

export const navbrandConfig = {
  cursor: "pointer",
}
