import styled, { css } from "styled-components"
import { Form } from "formik"
import { Button } from "../Shared/Button"
import { ErrorMessage } from "formik"
import { Link } from "gatsby"

export const FormWrapper = styled(Form)`
  gap: 1rem;
  height: 100%;
  min-width: 30rem;
  max-width: 35rem;
  background: ${props => props.theme.background};
  border: 4px solid ${props => props.theme.userBorderColor};
  border-radius: 0.75rem;
  flex-wrap: wrap;
  padding: 1.5rem 0rem;
  filter: drop-shadow(0 0 10px ${props => props.theme.font + "35"});
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 4px solid ${props => props.theme.font + "AA"};
  }

  @media (max-width: 768px) {
    width: 90vw;
    min-width: 90vw;
    max-width: 90vw;
  }
`
export const StyledInput = styled.input`
  border: 3px solid ${props => props.theme.userBorderColor};
  outline: none;
  background: transparent;
  padding: 0.5rem 0.75rem;
  color: ${props => props.theme.font};
  font-weight: 700;
  font-size: 1.15rem;
  border-radius: 0.45rem;
  width: 25rem;
  height: 3rem;
  line-height: 1.5rem;
  white-space: nowrap;
  transition: 0.375s all ease-in-out;

  ${({ isError }) =>
    isError &&
    css`
      border: 3px solid #ff003875;
      background: #ff003825;
    `}

  &:hover,
  &:focus {
    border: 3px solid ${props => props.theme.font + "AA"};
  }

  @media (max-width: 768px) {
    width: 75vw;
    font-size: 1.05rem;
  }
`

export const FormSubmit = styled(Button)`
  color: ${props => props.theme.font};

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.font};
  }
`

export const FormHeading = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: -0.25rem;
  color: ${props => props.theme.font};
  font-size: 2.25rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.05rem;
  }
`

export const Error = styled(ErrorMessage)`
  margin: -10px;
  text-align: left;
  width: 100%;
  padding: 0 0 0 3rem;
  @media (max-width: 768px) {
    text-align: left;
    margin: -10px;
    /* width: 72vw; */
  }
`

export const FormFullPageWrapper = styled.section`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 100vh;
    width: 100vw;
    padding: 0 5vw;
  }
`

export const FormInstead = styled(Link)`
  color: ${props => props.theme.font};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: ${props => props.theme.font};
  }
`
export const FormLoginWithGoogleWrapper = styled.div`
  gap: 1rem;
`
export const LogInWithGoogle = styled.div`
  border: 3px solid ${props => props.theme.userBorderColor};
  outline: none;
  background: transparent;
  padding: 0.5rem 0.75rem;
  color: ${props => props.theme.font};
  font-weight: 700;
  font-size: 1.15rem;
  border-radius: 0.45rem;
  width: 25rem;
  height: 3rem;
  line-height: 1.75rem;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    border: 3px solid ${props => props.theme.font + "AA"};
  }

  @media (max-width: 768px) {
    width: 75vw;
    font-size: 1.05rem;
  }
`
export const DividerLine = styled.div`
  width: 90%;
  height: 1rem;
  border-bottom: 2px solid ${props => props.theme.offline};
  text-align: center;
  margin: 0.25em 0 0.75rem 0;
`
export const OrLine = styled.span`
  font-size: 1.25rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.font};
  padding: 0 1rem 0px 1rem;
`
export const ForgotPassword = styled.div`
  cursor: pointer;
  font-size: 0.95rem;
  margin: -10px;
  text-align: left;
  width: 100%;
  padding: 0 0 0 3rem;
  @media (max-width: 768px) {
    text-align: left;
    margin: -10px;
    /* width: 100%; */
  }
`
