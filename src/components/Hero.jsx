import React from "react";

function Hero() {
  return (
    <>
        <div>
  <header className="header" data-header>
    <div className="container">
      <a href="" className="logo">
        <ion-icon name="barbell-sharp" aria-hidden="true" />
        <span className="span">Fitlife</span>
      </a>
      <nav className="navbar" data-navbar>
        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-sharp" aria-hidden="true" />
        </button>
        <ul className="navbar-list">
          <li>
            <a href="" className="navbar-link active" data-nav-link>Home</a>
          </li>
          <li>
            <a href="" className="navbar-link" data-nav-link>About Us</a>
          </li>
          <li>
            <a href="" className="navbar-link" data-nav-link>Classes</a>
          </li>
          <li>
            <a href="" className="navbar-link" data-nav-link>Blog</a>
          </li>
          <li>
            <a href="" className="navbar-link" data-nav-link>Contact Us</a>
          </li>
        </ul>
      </nav>
      <a href="" className="btn btn-secondary">Join Now</a>
      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    </div>
  </header>
  <main>
    <article>
      <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section style={{backgroundImage: 'url("./assets/images/hero-bg.png")'}}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              <strong className="strong">The Best</strong>Fitness Club
            </p>
            <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
            <p className="section-text">
              Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
            </p>
            <a href="" className="btn btn-primary">Get Started</a>
          </div>
          <div className="hero-banner">
            <img src="./src/assets/images/hero-banner.png" width={660} height={753} alt="hero banner" className="w-100" />
            <img src="./src/assets/images/hero-circle-one.png" width={666} height={666} aria-hidden="true" alt="" className="circle circle-1" />
            <img src="./src/assets/images/hero-circle-two.png" width={666} height={666} aria-hidden="true" alt="" className="circle circle-2" />
            <img src="./src/assets/images/heart-rate.svg" width={255} height={270} alt="heart rate" className="abs-img abs-img-1" />
            <img src="./src/assets/images/calories.svg" width={348} height={224} alt="calories" className="abs-img abs-img-2" />
          </div>
        </div>
        </section>
    </article>
  </main>
</div>

    </>
  );
}

export default Hero;
