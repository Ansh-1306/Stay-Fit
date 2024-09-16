import React from 'react';
import trackProgress from '../assets/images/track-progress.png';

function About() {
  return (
    <section className="section about" id="features" aria-label="features">
      <div className="container">
        <div className="about-banner has-after">
          <img
            src={trackProgress}
            width={660}
            height={648}
            loading="lazy"
            alt="Track Progress"
            className="w-100"
          />
        </div>
        <div className="about-content">
          <p className="section-subtitle">Features</p>
          <h2 className="h2 section-title">Track Your Progress Effortlessly</h2>
          <p className="section-text">
            Log workouts, monitor calories burned, and keep track of key metrics like heart rate and sleep patterns. Your all-in-one fitness dashboard.
          </p>
          <p className="section-text">
            Set personalized goals, view detailed reports, and make sure you're on track for a healthier lifestyle.
          </p>
          <a href="#" className="btn btn-primary">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
