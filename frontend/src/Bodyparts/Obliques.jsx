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
export default function Obliques() {
  return (
    <div>
      <section class="content">

        <div class="container main">
          <div class="muscle-group">
            Hand Side Plank
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/handside plank.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/handside plank side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Press your hand into the ground and pick up your hip off the ground.</StyledLi>
                <StyledLi>Open your chest and maintain this position for the allotted amount of time.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Dumbbell Russian Twist
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb russian twist.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb russian twist side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Sit on the floor and flex your knees and hips to a 90 degree angle.</StyledLi>
                <StyledLi>Your feet should be hovering off the ground. (If that's too hard start with heels on the
                  floor).</StyledLi>
                <StyledLi>Rotate your upper spine to engage your obliques.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>




      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
