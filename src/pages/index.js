import React from "react"

import "../styles/main.scss"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

export default ({ data }) => (
  <Layout>
    <Header />
    <Portfolio />
    <Contact />
  </Layout>
)
