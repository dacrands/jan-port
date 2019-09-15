import React from "react"

import "../styles/main.scss"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

export default () => (
  <Layout>
    <SEO title={"Welcome"}/>
    <Header />
    <Portfolio />
    <Contact />
  </Layout>
)
