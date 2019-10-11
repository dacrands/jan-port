import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import FilesVideo from "../media/videos/justfiles.mp4"
import BergenVideo from "../media/videos/bergenstem.mp4"
import ToViewVideo from "../media/videos/toviewit.mp4"
import TimesVideo from "../media/videos/times.mp4"
import StudyFriend from "../media/videos/studyfriend-ui.mp4"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bergen: file(relativePath: { eq: "imgs/stem-landing.JPG" }) {
          childImageSharp {
            id
            fluid(toFormat: PNG, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        toViewIt: file(relativePath: { eq: "imgs/to-view-it-2.JPG" }) {
          childImageSharp {
            id
            fluid(toFormat: PNG, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        justFiles: file(relativePath: { eq: "imgs/justfiles2.jpg" }) {
          childImageSharp {
            id
            fluid(toFormat: PNG, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nytApp: file(relativePath: { eq: "imgs/nytapp.JPG" }) {
          childImageSharp {
            id
            fluid(toFormat: PNG, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        studyFriend: file(relativePath: { eq: "imgs/study-friend-ui.jpg" }) {
          childImageSharp {
            id
            fluid(toFormat: PNG, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="section">
        <h2 className="text__title text--red text--space">Portfolio</h2>
        <div>
          {/* ------------------------
                  STUDY FRIEND
          ------------------------ */}
          <article className="card">
            <div className="card__img card__img--has-video">
              <video
                preload={"none"}
                src={StudyFriend}
                poster={data.studyFriend.childImageSharp.fluid.src}
                height={212}
                width={435}
                playsInline
                muted
                controls
                className="fluid card__img-video"
              ></video>
              <Img
                fluid={data.studyFriend.childImageSharp.fluid}
                alt="Bergen STEM landing page"
              />
            </div>
            <div className="card__content">
              <h3>Study Friend</h3>
              <p>
                Razor pages application
                made to help people study.
                Uses ASP.NET Core Identity
                for user authentication.
                Deployed app and SQL database
                using Azure services. Designed responsive user-interface 
                with Bootstrap 4.
              </p>
              <small>
                ASP.NET Core, Entity Framework, 
                Razor Pages, Azure Services, Bootstrap 4
              </small>
              <p>
                <a
                  href="https://studyfriend20191005031140.azurewebsites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Study Friend
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
          {/* ------------------------
                  BERGEN STEM
          ------------------------ */}
          <article className="card">
            <div className="card__img card__img--has-video">
              <video
                preload={"none"}
                src={BergenVideo}
                poster={data.bergen.childImageSharp.fluid.src}
                height={212}
                width={435}
                playsInline
                muted
                controls
                className="fluid card__img-video"
              ></video>
              <Img
                fluid={data.bergen.childImageSharp.fluid}
                alt="Bergen STEM landing page"
              />
            </div>
            <div className="card__content">
              <h3>Bergen STEM</h3>
              <p>
                Progressive web app designed and developed for the STEM program
                at Bergen Community College. Built with Gatsby and the
                Netlify-CMS, the site showcases student resources, scholarship
                information, and student projects.
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
          {/* ------------------------
                  JUST FILES
          ------------------------ */}
          <article className="card">
            <div className="card__img card__img--has-video">
              <video
                preload={"none"}
                src={FilesVideo}
                poster={data.justFiles.childImageSharp.fluid.src}
                height={244}
                width={435}
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
                Developed a web API that provides user-authentication and CRUD
                functionality for files hosted on an S3 bucket. Designed and
                built a responsive and accessible client-app using GatsbyJS
                (React).
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
          {/* ------------------------
                  TO VIEW IT
          ------------------------ */}
          <article className="card">
            <div className="card__img card__img--has-video">
              <video
                preload={"none"}
                src={ToViewVideo}
                poster={data.toViewIt.childImageSharp.fluid.src}
                height={244}
                width={435}
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
          {/* ------------------------
                  NYT APP
          ------------------------ */}
          <article className="card">
            <div className="card__img card__img--has-video">
              <video
                preload={"none"}
                src={TimesVideo}
                poster={data.nytApp.childImageSharp.fluid.src}
                height={244}
                width={435}
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
                Web app that features an archive search where users can read
                news articles dating back to the year 1900. Designed and built a
                responsive react/redux application to asynchronously retrieve
                API data. Developed a web API that uses CORS to proxy requests
                between the client app and the NYT API.
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
    )}
  />
)
