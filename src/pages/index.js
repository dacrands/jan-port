import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "../styles/main.scss"

import FilesVideo from "../images/justfiles.mp4"
import BergenVideo from "../images/bergenstem.mp4"
import ToViewVideo from "../images/toviewit.mp4"
import TimesVideo from "../images/times.mp4"

import Contact from "../components/Contact"

export default ({ data }) => (
  <main className="container">
    <header className="header">
      <div className="header__title">
        <h1 className="text__title">David Crandall</h1>
      </div>
      <div className="header__content">
        <p className="text--red">
          I am a software engineer that
          specializes in full-stack web development.
        </p>
        <p>
          <a
            className="btn btn--big"
            href="https://github.com/dacrands"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a className="btn btn--big" href="#contact">
            Contact
          </a>
          <a
            className="btn btn--big"
            href="https://dacrands.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </p>
      </div>
    </header>
    <section className="section">
      <h2 className="text__title text--red text--space">Portfolio</h2>
      <div>
        <article className="card">
          <div className="card__img card__img--has-video">
            <video
              src={BergenVideo}     
              poster={data.bergen.childImageSharp.src}  
              playsInline       
              loop                            
              muted
              controls
              className="fluid card__img-video"
            >
            </video>
            <Img
              fluid={data.bergen.childImageSharp.fluid}
              alt="Bergen STEM landing page"
            />
          </div>
          <div className="card__content">
            <h3>Bergen STEM</h3>
            <p>
              Progressive web app designed and developed for the STEM program at
              Bergen Community College. Built with Gatsby and the Netlify-CMS,
              the site showcases student resources, scholarship information, and
              student projects.
            </p>
            <small>React (GatsbyJS), Sass, Netlify CMS</small>
            <p>
              <a
                href="https://bergenstem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Bergen STEM
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/bergen-gatsby-cms"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub Repo
              </a>
            </p>
          </div>
        </article>
        <article className="card">
          <div className="card__img card__img--has-video">
            <video
              src={FilesVideo}
              poster={data.justFiles.childImageSharp.src}
              playsInline
              muted
              controls
              className="fluid card__img-video"
            />
            <Img
              fluid={data.justFiles.childImageSharp.fluid}
              alt="File Hosting App Landing Page"
            />
          </div>
          <div className="card__content">
            <h3>Just Files</h3>
            <p>
              File-hosting web app offering file search and file descriptions.
              Developed a web API that provides user-authentcation and CRUD
              functionality for files hosted on an S3 bucket. Designed and built
              a responsive and accessible client-app using GatsbyJS (React).
            </p>
            <small>
              <strong>Backend: </strong>
              Amazon S3, Flask, MySQL, Docker, JSON Web Tokens, Nginx,
              DigitalOcean
              <br />
              <strong>Frontend: </strong>
              React (GatsbyJS), Sass, Fetch API, Netlify
            </small>
            <p>
              <a
                href="https://files.crandall.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Just Files
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/s3-upload-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Backend Repo
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/s3-upload-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Frontend Repo
              </a>
            </p>
          </div>
        </article>
        <article className="card">
          <div className="card__img card__img--has-video">
            <video
              src={ToViewVideo}
              playsInline
              muted
              controls
              className="fluid card__img-video"
            />
            <Img
              fluid={data.toViewIt.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
            />
          </div>
          <div className="card__content">
            <h3>To View It</h3>
            <p>
              MVC to-do list application that features a scrolling-stocker
              ticker, weather information, and a custom background Youtube
              video. Uses JSON Web Tokens for email verifications and password
              resets.
            </p>
            <small>
              Flask, MySQL, JinJa2 Templates, Docker, JSON Web Tokens, Nginx,
              DigitalOcean, SendGrid
            </small>
            <p>
              <a
                href="https://toviewit.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                To View It
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/flask-smart-monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub Repo
              </a>
            </p>
          </div>
        </article>
        <article className="card">
          <div className="card__img card__img--has-video">
            <video
              src={TimesVideo}
              poster={data.nytApp.childImageSharp.src}
              playsInline
              muted
              controls
              className="fluid card__img-video"
            />
            <Img
              fluid={data.nytApp.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
            />
          </div>
          <div className="card__content">
            <h3>New York Times App</h3>
            <p>
              Web app that features an archive search where users can read news
              articles dating back to the year 1900. Designed and built a
              responsive react/redux application to asynchronously retrieve API
              data. Developed a web API that uses CORS to proxy requests between
              the client app and the NYT API.
            </p>
            <small>
              <strong>Frontend: </strong>
              React, Redux, Redux-Thunk, Sass
              <br />
              <strong>Backend: </strong>
              Flask, Docker, DigitalOcean, Nginx
            </small>
            <p>
              <a
                href="https://times.dcrands.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                New York Times App
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/new-york-times-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Backend Repo
              </a>
              {` `}
              <a
                href="https://github.com/dacrands/nyt-app-cors"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Frontend Repo
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
    <Contact />
  </main>
)

export const query = graphql`
  query {
    bergen: file(relativePath: { eq: "stem-landing.JPG" }) {
      childImageSharp {
        id
        fluid (toFormat: PNG, maxWidth: 600 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toViewIt: file(relativePath: { eq: "to-view-it-2.JPG" }) {
      childImageSharp {
        id
        fluid (toFormat: PNG, maxWidth: 600 ){
          ...GatsbyImageSharpFluid
        }
      }
    }
    justFiles: file(relativePath: { eq: "justfiles.jpg" }) {
      childImageSharp {
        id
        fluid (toFormat: PNG, maxWidth: 600 ){
          ...GatsbyImageSharpFluid
        }
      }
    }
    nytApp: file(relativePath: { eq: "nytapp.JPG" }) {
      childImageSharp {
        id
        fluid (toFormat: PNG, maxWidth: 600 ){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
