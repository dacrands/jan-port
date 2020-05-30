import React from "react"
import { Link } from "gatsby"

import Layout from  "../components/Layout"
import SEO from  "../components/SEO"

const NotFound = () => (
    <Layout>
        <SEO title={"You got Lost"}/>
        <h1>There's nothing here!</h1>
        <p>You got lost. It happens.</p>
        <Link to="/">Go back home</Link>
    </Layout>
)

export default NotFound;
