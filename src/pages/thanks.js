import React from "react"
import { Link } from "gatsby"

import Layout from  "../components/Layout"

import "../styles/main.scss"

const Thanks = () => (
  <Layout>
    <div className="center">
      <div className="success">
        <h1 className="text__title text--red">Thanks for the message!</h1>
        <p>I'll read it and get back to you</p>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  </Layout>
)

export default Thanks
