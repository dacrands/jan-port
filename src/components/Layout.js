import React from "react"
import SEO from "./SEO"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main className="container">
        {children}
      </main>
    </>
  )
}

export default Layout