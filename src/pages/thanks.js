import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Thanks = () => (
  <Layout>
    <SEO title={"Thanks"} />
    <div className="box center">
      <h1 className="text__title text--red">Thanks for the message!</h1>
      <p>I'll read it and get back to you</p>
      <Link to="/">Go back home</Link>
    </div>
  </Layout>
)

export default Thanks
