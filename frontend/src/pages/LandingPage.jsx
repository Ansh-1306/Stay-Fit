import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

function LandingPage() {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <>
      <div>
        <header className="header" dataheader>
          <div className="container">
            <a href="#" className="logo">
              <ion-icon name="barbell-sharp" aria-hidden="true" />
              <span className="span">Fitlife</span>
            </a>
            <nav className="navbar" data-navbar>
              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
              >
                <ion-icon name="close-sharp" aria-hidden="true" />
              </button>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link active" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#class" className="navbar-link" data-nav-link>
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-link" data-nav-link>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            {!user ? (
              <Link className="btn btn-primary" to="/login">Join Now</Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                SignOut
              </button>
            )}
            <button
              className="nav-open-btn"
              aria-label="open menu"
              data-nav-toggler
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
        </header>
        <main>
          <article>
            {/* 
- #HERO
*/}
            <section
              className="section hero bg-dark has-after has-bg-image"
              id="home"
              aria-label="hero"
              data-section
              style={{
                backgroundImage: 'url("./src/assets/images/hero-bg.png")',
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle">
                    <strong className="strong">The Best</strong>Fitness Club
                  </p>
                  <h1 className="h1 hero-title">
                    Work Hard To Get Better Life
                  </h1>
                  <p className="section-text">
                    Duis mollis felis quis libero dictum vehicula. Duis dictum
                    lorem mi, a faucibus nisi eleifend eu.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
                <div className="hero-banner">
                  <img
                    src="./src/assets/images/hero-banner.png"
                    width={660}
                    height={753}
                    alt="hero banner"
                    className="w-100"
                  />
                  <img
                    src="./src/assets/images/hero-circle-one.png"
                    width={666}
                    height={666}
                    aria-hidden="true"
                    alt=""
                    className="circle circle-1"
                  />
                  <img
                    src="./src/assets/images/hero-circle-two.png"
                    width={666}
                    height={666}
                    aria-hidden="true"
                    alt=""
                    className="circle circle-2"
                  />
                  <img
                    src="./src/assets/images/heart-rate.svg"
                    width={255}
                    height={270}
                    alt="heart rate"
                    className="abs-img abs-img-1"
                  />
                  <img
                    src="./src/assets/images/calories.svg"
                    width={348}
                    height={224}
                    alt="calories"
                    className="abs-img abs-img-2"
                  />
                </div>
              </div>
            </section>
            {/* 
- #ABOUT
*/}
            <section className="section about" id="about" aria-label="about">
              <div className="container">
                <div className="about-banner has-after">
                  <img
                    src="./src/assets/images/about-banner.png"
                    width={660}
                    height={648}
                    loading="lazy"
                    alt="about banner"
                    className="w-100"
                  />
                  <img
                    src="./src/assets/images/about-circle-one.png"
                    width={660}
                    height={534}
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-1"
                  />
                  <img
                    src="./src/assets/images/about-circle-two.png"
                    width={660}
                    height={534}
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-2"
                  />
                  <img
                    src="./src/assets/images/fitness.png"
                    width={650}
                    height={154}
                    loading="lazy"
                    alt="fitness"
                    className="abs-img w-100"
                  />
                </div>
                <div className="about-content">
                  <p className="section-subtitle">About Us</p>
                  <h2 className="h2 section-title">
                    Welcome To Our Fitness Gym
                  </h2>
                  <p className="section-text">
                    Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in
                    tellus vitae nisi aliquet dapibus non et erat. Pellentesque
                    porta sapien non accumsan dignissim curabitur sagittis nulla
                    sit amet dolor feugiat.
                  </p>
                  <p className="section-text">
                    Integer placerat vitae metus posuere tincidunt. Nullam
                    suscipit ante ac aliquet viverra vestibulum ante ipsum
                    primis.
                  </p>
                  <div className="wrapper">
                    <div className="about-coach">
                      <figure className="coach-avatar">
                        <img
                          src="./src/assets/images/about-coach.jpg"
                          width={65}
                          height={65}
                          loading="lazy"
                          alt="Trainer"
                        />
                      </figure>
                      <div>
                        <h3 className="h3 coach-name">Denis Robinson</h3>
                        <p className="coach-title">Our Coach</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* 
- #VIDEO
*/}
            <section className="section video" aria-label="video">
              <div className="container">
                <div
                  className="video-card has-before has-bg-image"
                  style={{
                    backgroundImage:
                      'url("./src/assets/images/video-banner.jpg")',
                  }}
                >
                  <h2 className="h2 card-title">Explore Fitness Life</h2>
                  <button className="play-btn" aria-label="play video">
                    <ion-icon name="play-sharp" aria-hidden="true" />
                  </button>
                  <a href="#" className="btn-link has-before">
                    Watch More
                  </a>
                </div>
              </div>
            </section>
            {/* 
- #CLASS
*/}
            <section
              className="section class bg-dark has-bg-image"
              id="class"
              aria-label="class"
              style={{
                backgroundImage: 'url("./src/assets/images/classes-bg.png")',
              }}
            >
              <div className="container">
                <p className="section-subtitle">Our Classes</p>
                <h2 className="h2 section-title text-center">
                  Fitness Classes For Every Goal
                </h2>
                <ul className="class-list has-scrollbar">
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: 416, height: 240 }}
                      >
                        <img
                          src="./src/assets/images/class-1.jpg"
                          width={416}
                          height={240}
                          loading="lazy"
                          alt="Weight Lifting"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./src/assets/images/class-icon-1.png"
                            width={52}
                            height={52}
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Weight Lifting
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">85%</span>
                          </div>
                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "85%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: 416, height: 240 }}
                      >
                        <img
                          src="./src/assets/images/class-2.jpg"
                          width={416}
                          height={240}
                          loading="lazy"
                          alt="Cardio & Strenght"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./src/assets/images/class-icon-2.png"
                            width={52}
                            height={52}
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Cardio &amp; Strenght
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">70%</span>
                          </div>
                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: 416, height: 240 }}
                      >
                        <img
                          src="./src/assets/images/class-3.jpg"
                          width={416}
                          height={240}
                          loading="lazy"
                          alt="Power Yoga"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./src/assets/images/class-icon-3.png"
                            width={52}
                            height={52}
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Power Yoga
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">90%</span>
                          </div>
                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: 416, height: 240 }}
                      >
                        <img
                          src="./src/assets/images/class-4.jpg"
                          width={416}
                          height={240}
                          loading="lazy"
                          alt="The Fitness Pack"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <div className="title-wrapper">
                          <img
                            src="./src/assets/images/class-icon-4.png"
                            width={52}
                            height={52}
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />
                          <h3 className="h3">
                            <a href="#" className="card-title">
                              The Fitness Pack
                            </a>
                          </h3>
                        </div>
                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>
                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>
                            <span className="progress-value">60%</span>
                          </div>
                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* 
- #BLOG
*/}
            <section className="section blog" id="blog" aria-label="blog">
              <div className="container">
                <p className="section-subtitle">Our News</p>
                <h2 className="h2 section-title text-center">
                  Latest Blog Feed
                </h2>
                <ul className="blog-list has-scrollbar">
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: 440, height: 270 }}
                      >
                        <img
                          src="./src/assets/images/blog-1.jpg"
                          width={440}
                          height={270}
                          loading="lazy"
                          alt="Going to the gym for the first time"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Going to the gym for the first time
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: 440, height: 270 }}
                      >
                        <img
                          src="./src/assets/images/blog-2.jpg"
                          width={440}
                          height={270}
                          loading="lazy"
                          alt="Parturient accumsan cacus pulvinar magna"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Parturient accumsan cacus pulvinar magna
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: 440, height: 270 }}
                      >
                        <img
                          src="./src/assets/images/blog-3.jpg"
                          width={440}
                          height={270}
                          loading="lazy"
                          alt="Risus purus namien parturient accumsan cacus"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>
                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Risus purus namien parturient accumsan cacus
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>
        <footer className="footer">
          <div
            className="section footer-top bg-dark has-bg-image"
            style={{
              backgroundImage: 'url("./src/assets/images/footer-bg.png")',
            }}
          >
            <div className="container">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <ion-icon name="barbell-sharp" aria-hidden="true" />
                  <span className="span">Fitlife</span>
                </a>
                <p className="footer-brand-text">
                  Etiam suscipit fringilla ullamcorper sed malesuada urna nec
                  odio.
                </p>
                <div className="wrapper">
                  <img
                    src="./src/assets/images/footer-clock.png"
                    width={34}
                    height={34}
                    loading="lazy"
                    alt="Clock"
                  />
                  <ul className="footer-brand-list">
                    <li>
                      <p className="footer-brand-title">Monday - Friday</p>
                      <p>7:00Am - 10:00Pm</p>
                    </li>
                    <li>
                      <p className="footer-brand-title">Saturday - Sunday</p>
                      <p>7:00Am - 2:00Pm</p>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Our Links</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Contact Us</p>
                </li>
                <li className="footer-list-item">
                  <div className="icon">
                    <ion-icon name="location" aria-hidden="true" />
                  </div>
                  <address className="address footer-link">
                    1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
                  </address>
                </li>
                <li className="footer-list-item">
                  <div className="icon">
                    <ion-icon name="call" aria-hidden="true" />
                  </div>
                  <div>
                    <a href="tel:18001213637" className="footer-link">
                      1800-121-3637
                    </a>
                    <a href="tel:+915552348765" className="footer-link">
                      +91 555 234-8765
                    </a>
                  </div>
                </li>
                <li className="footer-list-item">
                  <div className="icon">
                    <ion-icon name="mail" aria-hidden="true" />
                  </div>
                  <div>
                    <a href="mailto:info@fitlife.com" className="footer-link">
                      info@fitlife.com
                    </a>
                    <a
                      href="mailto:services@fitlife.com"
                      className="footer-link"
                    >
                      services@fitlife.com
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title has-before">Our Newsletter</p>
                </li>
                <li>
                  <form action className="footer-form">
                    <input
                      type="email"
                      name="email_address"
                      aria-label="email"
                      placeholder="Email Address"
                      required
                      className="input-field"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      aria-label="Submit"
                    >
                      <ion-icon
                        name="chevron-forward-sharp"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </li>
                <li>
                  <ul className="social-list">
                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-link">
                        <ion-icon name="logo-twitter" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">
                © 2022 Fitlife. All Rights Reserved By{" "}
                <a href="#" className="copyright-link">
                  codewithsadee.
                </a>
              </p>
              <ul className="footer-bottom-list">
                <li>
                  <a href="#" className="footer-bottom-link has-before">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-bottom-link has-before">
                    Terms &amp; Condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <a
          href="#top"
          className="back-top-btn"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="caret-up-sharp" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
export default LandingPage;
