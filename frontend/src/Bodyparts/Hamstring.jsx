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
export default function Hamstring() {
  return (
    <div>
      <section class="content">
        <div class="container main">
          <div class="muscle-group">
            Barbell Stiff Leg Deadlifts
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/hamstrings stiff leg1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/hamstrings stiff leg2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Stand with a barbell at your shins with your feet shoulder width apart.</StyledLi>
                <StyledLi>Bend forward at your hips and keep your knees as fully extended as possible.</StyledLi>
                <StyledLi>Grab the barbell and then extend your hips while maintaining a straight back.</StyledLi>
                <StyledLi>From the standing position, lower the weight in a controlled manner.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Machine Hamstring Curl
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/hamstrings curl.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/hamstrings curl2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Lay down on the machine, placing your legs beneath the padded lever. Position your legs so that the padded lever is below your calve muscles.</StyledLi>
                <StyledLi>Support yourself by grabbing the side handles of the machine, and slowly raise the weight with your legs, toes pointed straight.</StyledLi>
                <StyledLi> Pause at the apex of the motion, then slowly return to starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
