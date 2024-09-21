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
export default function LowerBack() {
  return (
    <div>
      <section class="content">
        <div class="container main">
          <div class="muscle-group">
            Barbell Deadlift
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/lowerback barbell1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/lowerback barbell2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Stand with your mid-foot under the bar and grip the bar with your hands, about a shoulder width apart.</StyledLi>
                <StyledLi>Bend your knees, then lift the bar by straightening your back. It is important to keep your back straight.</StyledLi>
                <StyledLi>Stand to your full height and hold.</StyledLi>
                <StyledLi>Lower the bar to the floor by bending your knees and keeping your back straight.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Machine 45 Degree Back Extension
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/lowerback machine1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/lowerback machine2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Position your thighs on the padding and hook your feet on the platform supports.</StyledLi>
                <StyledLi>Keeping your back straight, slowly bend at your waist until your legs and back are at a 45° angle.</StyledLi>
                <StyledLi>Slowly raise your body to the starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}