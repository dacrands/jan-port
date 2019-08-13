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
        <a href="asdfasf">Github</a>
        <a href="asdfasdf">Email</a>
        <a href="asdfasdf">Resume</a>
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
          <p>
          A file-hosting application that emphasizes simplicity. Features a GatsbyJS front-end and a Flask back-end. The Flask API provides users the ability to upload, download, and delete files from an S3 bucket, as well provide user authentication. The client app is responsive, accessible, and utilizes the Fetch API for ajax.
          </p>
          <p>
            <a href="">Site</a>            
            <br/>
            <a href="">Code</a>
          </p>
        </div>
      </article>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/to-view-it-2.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>To View It</h3>
          <p>
          A to-do list application that features a scrolling-stocker ticker, weather information, and a custom background Youtube video. Features SendGrid email authentication and the YouTube IFrame API.
          </p>
          <p>
            <a href="">Site</a>            
            <br/>
            <a href="">Code</a>
          </p>
        </div>
      </article>
      <article className="card">
        <div className="card__img">
          <img className="fluid" src="https://friendly-shannon-aaf0b6.netlify.com/img/to-view-it-2.jpg" alt=""/>
        </div>
        <div className="card__content">
          <h3>Some Project</h3>
          <p>
          Website designed and built for the STEM program at Bergen Community College. Built with Gatsby and the Netlify-CMS, the site showcases student resources, scholarship information, and student projects.
          </p>
          <p>
            <a href="">Site</a>            
            <br/>
            <a href="">Code</a>
          </p>
        </div>
      </article>
    </div>
  </section>
</main>
)