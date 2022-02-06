import React from "react"
import styled, { css } from "styled-components"

export default function Footer({ isLanding }) {
  return (
    <>
      <FooterWrapper
        isLanding={isLanding}
        className="d-flex justify-content-center align-items-center"
      >
        <FooterHeading>Stream.it</FooterHeading>
        <FooterInfo>
          Send children on adventures with their favourite characters in a space
          made just for them free with your membership. Stream smoothly with our
          lightning-fast protocol network.
        </FooterInfo>
      </FooterWrapper>
      <FooterCopyrightsWrapper
        isLanding={isLanding}
        className="d-flex justify-content-center align-items-center"
      >
        <FooterCopyrights>
          © 2022 Antler | Online Movie Streaming
        </FooterCopyrights>
      </FooterCopyrightsWrapper>
    </>
  )
}

const FooterWrapper = styled.footer<{ isLanding?: boolean }>`
  /* height: 10vh; */
  background: ${props => props.theme.background};
  color: ${props => props.theme.font};
  flex-direction: column;
  width: 100%;
  padding: 4rem 0 1rem 0;
  outline: 4px solid ${props => props.theme.font};
  border-top: 4px solid ${props => props.theme.font};
  outline-offset: 2px;
  overflow: hidden;
  gap: 1rem;

  ${({ isLanding }) =>
    isLanding &&
    css`
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
      background: ${props => props.theme.font};
      color: ${props => props.theme.background};
    `}
`
const FooterHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`
const FooterInfo = styled.p`
  font-size: 1.25rem;
  width: 40%;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10vw;
  }
`
const FooterCopyrightsWrapper = styled.div<{ isLanding?: boolean }>`
  background: ${props => props.theme.background};
  flex-direction: column;
  color: ${props => props.theme.font};
  width: 100%;
  overflow: hidden;
  padding: 1rem 0 0 0;
  position: absolute;
  margin-top: -4px;

  ${({ isLanding }) =>
    isLanding &&
    css`
      background: ${props => props.theme.font};
      color: ${props => props.theme.background};
    `}
`
const FooterCopyrights = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
`
