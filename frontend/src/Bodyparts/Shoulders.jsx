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
export default function Shoulders() {
  return (
    <div>
      <section class="content">

        <div class="container main">
          <div class="muscle-group">
            Barbell Overhead Press
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/barbell overhead press.mp4  " type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/barbell overhead press side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist
                  (vertical forearms).</StyledLi>
                <StyledLi>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint
                  and flexing at the shoulder joint.</StyledLi>
                <StyledLi>Press until your elbows are extended and push your head forward slightly.</StyledLi>
                <StyledLi>Return to the start position with control. Pulling your chin back to allow the bar to pass
                  your face safely.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Dumbbell Seated Overhead Press
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb seated overhead press.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb seated overhead press side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms
                  forward.</StyledLi>
                <StyledLi>Raise the dumbbells upwards and pause at the contracted position.</StyledLi>
                <StyledLi>Lower the weights back to starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>




      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
