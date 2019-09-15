import React from "react"

import "../styles/main.scss"

import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"


export default ({ data }) => (
  <main className="container">
    <Header />
    <Portfolio />
    <Contact />
  </main>
)
