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
export default function Triceps() {
  return (
    <div>
      <section class="content">
        <div class="container main">
          <div class="muscle-group">
            Cable Rope Pushdown
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/triceps cable1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/triceps cable2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>The cable should be set all the way at the top of the machine.</StyledLi>
                <StyledLi>Make sure to keep your upper arm glued at your side. Extend your elbows until you feel your triceps contract.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Bench Dips
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/triceps bench dips1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/triceps bench dips2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div><br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Grip the edge of the bench with your hands, Keep your feet together and legs straight.</StyledLi>
                <StyledLi>Lower your body straight down.</StyledLi>
                <StyledLi>Slowly press back up to the starting point.</StyledLi>
                <StyledLi>TIP: Make this harder by raising your feet off the floor and adding weight.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
      </section>
      <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
    </div>
  )
}
