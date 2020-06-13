import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/main.scss"

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
      <main className="container">{children}</main>
    </>
  )
}

export default Layout
