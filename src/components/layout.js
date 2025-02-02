import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './teaser'
import Grid from "./Grid"
import Feature from "./Feature"
import Footer from "./footer"
import Config from "./config"
import MenuLink from "./menuLink"
import Hero from "./hero"
import Header from "./Header"
import Article from "./Article"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    header: Header,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    config: Config,
    hero: Hero,
    "menu_link": MenuLink,
    article: Article,
  }
},[]);

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      {children}
      {/* <Footer /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout