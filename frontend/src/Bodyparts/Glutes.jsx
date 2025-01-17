import React from 'react'
import "./BodyPart.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 20px;
  text-indent: 20px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    font-family: 'Nunito', Times, serif;
`;

const StyledLi = styled.li`
  position: relative;
  padding-left: 1.5em;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: red;
  }
`;
export default function Glutes() {
  return (
    <div>
      <section class="content">
        <div class="container main">
          <div class="muscle-group">
            Barbell Hip Thrusts
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/glutes hip thrusts1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/glutes hip thrusts2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips.</StyledLi>
                <StyledLi>Lean back against the bench so that your shoulders are resting upon it, stretch your arms out to either side using the bench as support.</StyledLi>
                <StyledLi>Raise the weight by driving through your feet and extending your hips upwards. Support the weight with your shoulders and feet.</StyledLi>
                <StyledLi>Slowly extend as far as you can, and then slowly return to the starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Barbell Squats
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/glutes squat1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/glutes squat2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.</StyledLi>
                <StyledLi>Grip the bar across your shoulders and support it on your upper back. Unwrack the bar by straightening your legs, and take a step back.</StyledLi>
                <StyledLi> Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.</StyledLi>
                <StyledLi>Raise the bar back to starting position, lift with your legs and exhale at the top.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
      </section>

      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
