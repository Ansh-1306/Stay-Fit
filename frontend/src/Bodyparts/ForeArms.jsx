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
export default function ForeArms() {
  return (
    <div>
      <section class="content">

        <div class="container main">
          <div class="muscle-group">
            Dumbbell Wrist Curl
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell wrist curl.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell wrist curl side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.
                </StyledLi>
                <StyledLi>Slowly curl your wrist upwards in a semicircular motion.</StyledLi>
                <StyledLi>Return to starting position and repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Dumbell Wrist Extension
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell wrist extension.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell wrist extension side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Grab two dumbbells with an overhand grip and lay your forearms across your knees.</StyledLi>
                <StyledLi>Let your wrists flex fully, then extend your wrists.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
      </section>
    </div>
  )
}
