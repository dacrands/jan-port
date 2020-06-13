import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import StudyFriendVideo from "../media/videos/studyfriend-ui.mp4"

const StudyFriend = ({ data }) => (
  <Layout>
    <SEO title={"Study Friend"} />
    <div className="container">
      <header className="pad__vertical">
        <h1 className="text__title text--red">Study Friend</h1>
        <p>
          Azure got too expensive, so as I figure out hosting options this will
          have to do.
        </p>
        <Link to="/">Go Back Home</Link>
      </header>
      <section>
        <h2>In action</h2>
        <video
          preload={"none"}
          src={StudyFriendVideo}
          poster={data.videoPoster.childImageSharp.fluid.src}
          width={"100%"}
          playsInline
          muted
          controls
        ></video>
      </section>
      <section>
        <h2>Screenshots</h2>
        <Img
          fluid={data.homePage.childImageSharp.fluid}
          alt="Study Friend landing page"
        />
        <Img
          fluid={data.questionsPage.childImageSharp.fluid}
          alt="Study Friend questions page"
        />
        <Img
          fluid={data.answersPage.childImageSharp.fluid}
          alt="Study Friend answers page"
        />
        <Img
          fluid={data.editAnswerPage.childImageSharp.fluid}
          alt="Study Friend edit answer page"
        />
        <Img
          fluid={data.search.childImageSharp.fluid}
          alt="Study Friend search example"
        />
        <Img
          fluid={data.createTopicPage.childImageSharp.fluid}
          alt="Study Friend create topic page"
        />
        <Img
          fluid={data.accountPage.childImageSharp.fluid}
          alt="Study Friend user account page"
        />
        <Img
          fluid={data.aboutPage.childImageSharp.fluid}
          alt="Study Friend about page"
        />
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    videoPoster: file(relativePath: { eq: "imgs/study-friend-ui.jpg" }) {
      childImageSharp {
        id
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homePage: file(relativePath: { eq: "imgs/study/homepage.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    questionsPage: file(relativePath: { eq: "imgs/study/questions.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    answersPage: file(relativePath: { eq: "imgs/study/answers.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    editAnswerPage: file(relativePath: { eq: "imgs/study/edit-answer.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    search: file(relativePath: { eq: "imgs/study/search.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    createTopicPage: file(relativePath: { eq: "imgs/study/create.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    accountPage: file(relativePath: { eq: "imgs/study/account.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutPage: file(relativePath: { eq: "imgs/study/about.JPG" }) {
      childImageSharp {
        id
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default StudyFriend
