import React from 'react';
import heroBg from '../assets/images/hero-bg.png'; // Adjust the paths to your project structure
import fitnessTrackerBanner from '../assets/images/hero-banner.png';
import heroCircleOne from '../assets/images/hero-circle-one.png';
import heroCircleTwo from '../assets/images/hero-circle-two.png';
import heartRate from '../assets/images/heart-rate.svg';
import calories from '../assets/images/calories.svg';

function Hero() {
  return (
    <section
      className="section hero bg-dark has-after has-bg-image"
      id="home"
      aria-label="hero"
      data-section
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <strong className="strong">Track Your</strong>Fitness Journey
          </p>
          <h1 className="h1 hero-title">Stay Active, Stay Healthy</h1>
          <p className="section-text">
            Monitor your daily activity, set goals, and track progress towards a healthier you.
          </p>
          <a href="#" className="btn btn-primary">
            Start Tracking
          </a>
        </div>

        {/* Hero Banner */}
        <div className="hero-banner">
          <img
            src={fitnessTrackerBanner}
            width={660}
            height={753}
            alt="Fitness Tracker"
            className="w-100"
          />
          <img
            src={heroCircleOne}
            width={666}
            height={666}
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <img
            src={heroCircleTwo}
            width={666}
            height={666}
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />
          <img
            src={heartRate}
            width={255}
            height={270}
            alt="Heart rate"
            className="abs-img abs-img-1"
          />
          <img
            src={calories}
            width={348}
            height={224}
            alt="Calories"
            className="abs-img abs-img-2"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
