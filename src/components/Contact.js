import React from "react"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section id="contact" className="">
        <div className="">
          <h2 className="text__title text--red">Contact</h2>
        </div>
        <div className="">
          <form
            className="form"
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p className="form__item">
              <label htmlFor="name" ref="nameLabel">
                <small>01.</small>
                {` `}
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                ref="nameInput"
                onChange={this.handleChange}
              />
            </p>
            <p className="form__item">
              <label htmlFor="email" ref="emailLabel">
                <small>02.</small>
                {` `}
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                ref="emailInput"
                onChange={this.handleChange}
              />
            </p>
            <p className="form__item">
              <label htmlFor="message" ref="textareaLabel">
                <small>03.</small>
                {` `}Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                ref="textArea"
                rows="10"
                // cols="40"
                onChange={this.handleChange}
              />
            </p>
            <div className="form__item">
              <button className="btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
