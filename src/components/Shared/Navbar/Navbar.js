import React, { useState, useEffect, useContext } from "react"
import {
  NavbarWrapper,
  NavLinkWrapper,
  NavbarLinks,
  NavbarLinksAnchor,
  NavbarLogin,
  NavbarMenu,
  navbrandConfig,
} from "./NavbarElements"
import { lightTheme } from "../../../theme/global-theme"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import { AuthContext } from "../../../context/auth/AuthContext"
import { signInStatus, signOutUser } from "../../../firebase"

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [showNavItems, setShowNavItems] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  })
  const { user, dispatch } = useContext(AuthContext)

  const ButtonConfig = {
    padding: ".5rem 2rem",
    curve: ".65rem",
    fontSize: "1rem",
    bold: 600,
    color: lightTheme.font,
    hoverBg: lightTheme.font,
  }

  const handlerUser = () => {
    if (user) {
      signOutUser(dispatch)
    } else {
      navigate("/auth/signin")
    }
  }

  useEffect(() => {
    if (screenSize.width <= 768) {
      setIsMobile(true)
      setShowNavItems(false)
    } else {
      setIsMobile(false)
      setShowNavItems(true)
    }

    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [screenSize.width])

  useEffect(() => {
    signInStatus(dispatch)
  }, [dispatch, user])

  return (
    <NavbarWrapper className="container-fluid d-flex justify-content-between align-items-center">
      <StaticImage
        src={"../../../images/gatsby-icon.png"}
        width={45}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Antler"
        style={navbrandConfig}
        placeholder="BLURRED"
        onClick={() => navigate("/")}
      />
      {isMobile && (
        <NavbarMenu
          onClick={() => {
            setShowNavItems(!showNavItems)
          }}
        />
      )}
      <NavLinkWrapper
        animateNav={showNavItems}
        className="d-flex justify-content-around align-items-center"
      >
        <NavbarLinksAnchor
          href={"https://github.com/nparashar150"}
          target={"_blank"}
        >
          About Me
        </NavbarLinksAnchor>
        <NavbarLinks to={user ? "/auth/browse" : "/auth/signin"}>
          Browse
        </NavbarLinks>
        <NavbarLinksAnchor
          href={"https://github.com/nparashar150/WebApp"}
          target={"_blank"}
        >
          Source Code
        </NavbarLinksAnchor>
        {isMobile && (
          <NavbarLogin onClick={handlerUser} {...ButtonConfig}>
            {user ? "Log Out" : "Log In"}
          </NavbarLogin>
        )}
      </NavLinkWrapper>
      {!isMobile && (
        <NavbarLogin onClick={handlerUser} {...ButtonConfig}>
          {user ? "Log Out" : "Log In"}
        </NavbarLogin>
      )}
    </NavbarWrapper>
  )
}
