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
export default function Traps() {
  return (
    <div>
      <section class="content">

        <div class="container main">
          <div class="muscle-group">
            Dumbbell Seated Shrug
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/seated shrug.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/seated shrug side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Sit on a bench with dumbbells in both hands, palms facing your body, back straight.</StyledLi>
                <StyledLi>Elevate your shoulders and hold the contracted position at the apex of the motion.</StyledLi>
                <StyledLi>Slowly lower your shoulders back to starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Barbell Silverback Shrug
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/silverback shrug.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/silverback shrug side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Stand with your feet shoulder width apart holding the Barbell with both hands in front just
                  past shoulder width.</StyledLi>
                <StyledLi>Bend forward at the hips with a slight bend in your knees, keeping your back straight.</StyledLi>
                <StyledLi>Engage your shoulder blades, as if you are trying to touch them together.</StyledLi>
                <StyledLi>Release the shrug.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>




      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
