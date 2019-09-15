import React from "react"
import Helmet from "./Helmet"

export default ({ children}) => (
  <>
    <Helmet/>
    <main className="container">
      {children}
    </main>
  </>
)