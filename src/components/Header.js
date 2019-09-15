import React from "react"

export default () => (
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
)
