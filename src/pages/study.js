import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from  "../components/Layout"
import SEO from  "../components/SEO"

import StudyFriendVideo from "../media/videos/studyfriend-ui.mp4"

const StudyFriend = ({data}) => (
  <Layout>
    <SEO title={"Study Friend"} />
      <div className="container">
        <header className="pad__vertical">
          <h1 className="text__title text--red">
              Study Friend
          </h1>
          <p>Azure got too expensive, so as I 
            figure out hosting options this will have to do.
          </p>
          <Link to="/">Go Back Home</Link>
        </header>
        <div>
          <h2>In action</h2>
          <video
            preload={"none"}
            src={StudyFriendVideo}
            poster={data.studyFriend.childImageSharp.fluid.src}
            width={"100%"}
            playsInline
            muted
            controls
          ></video>
        </div>
        <div>
          <h2>Screenshots</h2>
          <Img
            fluid={data.studyFriend.childImageSharp.fluid}
            alt="Study Friend landing page"                                                
          />
        </div>
      </div>
  </Layout>
)

export const query = graphql`
  query {
    studyFriend: file(relativePath: { eq: "imgs/study-friend-ui.jpg" }) {
      childImageSharp {
        id
        fluid(toFormat: PNG, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default StudyFriend