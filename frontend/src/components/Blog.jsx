import React from 'react';
import blog1 from '../assets/images/blog-1.jpg'; // Adjust path as per your project structure

function Blog() {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Our Blog</p>
        <h2 className="h2 section-title text-center">Latest Health Tips</h2>
        <ul className="blog-list has-scrollbar">
          <li className="scrollbar-item">
            <div className="blog-card">
              <div className="card-banner img-holder">
                <img
                  src={blog1}
                  width={440}
                  height={270}
                  alt="Healthy Habits"
                  className="img-cover"
                />
                <time className="card-meta" dateTime="2022-07-07">
                  7 July 2022
                </time>
              </div>
              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Building Healthy Habits
                  </a>
                </h3>
                <p className="card-text">
                  Discover how to develop sustainable healthy habits that last.
                </p>
                <a href="#" className="btn-link has-before">Read More</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blog;
