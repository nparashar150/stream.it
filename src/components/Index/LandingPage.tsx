import React from "react"
import {
  LandingWrapper,
  LandingHeading,
  AboutWrapper,
  AboutInfo,
  About,
  AboutHeading,
  AboutImageWrapper,
  FeatureInfo,
  FeatureList,
} from "./IndexElements"
import { Button } from "../Shared/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { lightTheme } from "../../theme/global-theme"
import { navigate } from "gatsby"
import { FaMobileAlt } from "react-icons/fa/index"
import { FiServer } from "react-icons/fi/index"

export default function Index({ data, features }) {
  const ImageStyles = {
    filter: "brightness(125%) drop-shadow(0 0 10px #ffffff75)",
  }

  const ButtonConfig = {
    padding: ".75rem 3rem",
    curve: "1rem",
    fontSize: "1.5rem",
    bold: 800,
    color: lightTheme.font,
    hoverBg: lightTheme.font,
    zIndex: 5,
    dropShadow: true,
  }

  const aboutImage = getImage(data.landingaboutimage.gatsbyImageData)
  const featuresImage = getImage(data.landingfeaturesimage.gatsbyImageData)
  return (
    <>
      <LandingWrapper className="container d-flex justify-content-center align-items-center">
        <LandingHeading>
          Best pick for <span>hassle-free</span> <br /> <span>streaming</span>{" "}
          <span>experience.</span>
        </LandingHeading>
        <Button onClick={() => navigate("/auth/signup")} {...ButtonConfig}>
          {" "}
          Get Started
        </Button>
      </LandingWrapper>
      <AboutWrapper className="container-fluid d-flex justify-content-between align-items-center">
        <AboutImageWrapper>
          <GatsbyImage image={aboutImage} alt={"image"} style={ImageStyles} />
        </AboutImageWrapper>
        <About className="d-flex justify-content-between align-items-center flex-column">
          <AboutHeading>{data.landingaboutheading.text}</AboutHeading>
          <AboutInfo>{data.landingaboutinfo.text}</AboutInfo>
        </About>
      </AboutWrapper>
      <AboutWrapper
        features
        className="container-fluid d-flex justify-content-between align-items-center"
      >
        <About className="d-flex justify-content-between align-items-center flex-column">
          <AboutHeading>{data.landingfeaturesheading.text}</AboutHeading>
          <FeatureInfo className="d-flex justify-content-between align-items-center flex-column">
            {features.edges.map((e, key) => {
              return (
                <FeatureList key={key}>
                  {key === 1 ? (
                    <FaMobileAlt size="5rem" />
                  ) : (
                    <FiServer size="6.25rem" />
                  )}
                  <div>
                    <b>{e.node.data.feature_title.text}</b>
                    <br />
                    {e.node.data.feature_info.text}
                  </div>
                </FeatureList>
              )
            })}
          </FeatureInfo>
        </About>
        <GatsbyImage image={featuresImage} alt={"image"} style={ImageStyles} />
      </AboutWrapper>
    </>
  )
}
