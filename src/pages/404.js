import React from "react"
import { Link } from "gatsby"

import Layout from  "../components/Layout"
import SEO from  "../components/SEO"

const NotFound = () => (
    <Layout>
        <SEO title={"You got Lost"}/>
            <div className="box center">
                <h1 className="text__title text--red">There's nothing here!</h1>
                <p>You got lost. It happens.</p>
                <Link to="/">Go back home</Link>
            </div>
    </Layout>
)

export default NotFound;
