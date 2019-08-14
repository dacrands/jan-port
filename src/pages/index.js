import React from "react"

import "../styles/main.scss"

export default () => (
  <main className="container">
  <header class="header">
    <div className="header__title">
        <h1 className="text__title">David Crandall
        </h1>
    </div>

    <div className="header__content">
      <p class="text--red">
        REST. MVC. CRUD. Web APIs. HTTP. 
        Authentication. Relational Databases. Containerization.
      </p>
      <p>
        Strong JavaScript Kowledge. Responsive Web Design. Experienced with ReactJS. Semantic HTML. Modular CSS. Accessibility Conscious.
      </p>
      <p>
        <a className="header__content-link" href="asdfasf">Github</a>
        <a className="header__content-link" href="asdfasdf">Email</a>
        <a className="header__content-link" href="asdfasdf">Resume</a>
        <a className="header__content-link" href="asdfasdf">Blog</a>
      </p>
    </div>

  </header>
  <section class="section">    
    <h2 class="text__title text--red text--space">Projects</h2>   
    <div>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/bstem3.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>Bergen STEM</h3>   
          <small><em>
            React (GatsbyJS), Sass, Netlify CMS
            </em></small>       
          <p>
          Website designed and built for the STEM program at Bergen Community College. Built with Gatsby and the Netlify-CMS, the site showcases student resources, scholarship information, and student projects.
          </p>
          <p>
            <a href="">Bergen STEM</a>  
            <br/>          
            <a href="">GitHub Repo</a>
          </p>
        </div>
      </article>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/justfiles.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>Just Files</h3>
          <small><strong>Backend: </strong><em>
                Amazon S3,                
                Flask,
                MySQL,
                Docker,
                Nginx,
                DigitalOcean,
                SendGrid</em>
                <br/>
                <strong>Frontend: </strong><em>
                React (GatsbyJS),                                
                Sass,
                Fetch API, Netlify</em></small>
          <p>
          A file-hosting application that emphasizes simplicity. Features a GatsbyJS front-end and a Flask back-end. The Flask API provides users the ability to upload, download, and delete files from an S3 bucket, as well provide user authentication. The client app is responsive, accessible, and utilizes the Fetch API for ajax.
          </p>
          <p>
            <a href="">Just Files</a>            
            <br/>
            <a href="">Backend Repo</a>
            <br/>
            <a href="">Frontend Repo</a>
          </p>
        </div>
      </article>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/to-view-it-2.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>To View It</h3>
          <small>
            <em>
            Flask, MySQL, JinJa2 Templates, Docker, Nginx, DigitalOcean, SendGrid
            </em>
          </small>
          <p>
          A to-do list application that features a scrolling-stocker ticker, weather information, and a custom background Youtube video. Features SendGrid email authentication and the YouTube IFrame API.
          </p>
          <p>
            <a href="">To View It</a>            
            <br/>
            <a href="">GitHub Repo</a>
          </p>
        </div>
      </article>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/to-view-it-2.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>New York Times App</h3>
          <small>
            <strong>Frontend: </strong>
            <em>
            React,
            Redux,
            Redux-Thunk,
            Sass
            </em>
            <br/>          
            <strong>Backend: </strong>
            <em>            
            Flask,
            Docker,
            DigitalOcean,
            Nginx           
            </em>
          </small>
          <p>
          Website designed and built for the STEM program at Bergen Community College. Built with Gatsby and the Netlify-CMS, the site showcases student resources, scholarship information, and student projects.
          </p>
          <p>
            <a href="">New York Times App</a>            
            <br/>
            <a href="">GitHub Repo</a>
          </p>
        </div>
      </article>
    </div>
  </section>
</main>
)