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
export default function Biceps() {
  return (
    <div>
      <section class="content">

        <div class="container main">
          <div class="muscle-group">
            Barbell Curl
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/barbell curl.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/barbell curl side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>While holding the upper arms stationary, curl the weights forward while contracting the
                  biceps as you breathe out.</StyledLi>
                <StyledLi>Continue the movement until your biceps are fully contracted and the bar is at shoulder
                  level.</StyledLi>
                <StyledLi>Hold the contracted position for a second and squeeze the biceps hard.</StyledLi>
                <StyledLi>Slowly bring the weight back down to the starting position.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>


        <div class="container main">
          <div class="muscle-group">
            Dumbbell Hammer Curl
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell curl.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell curl side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi> Hold the dumbbells with a neutral grip (thumbs facing the ceiling).</StyledLi>
                <StyledLi>Slowly lift the dumbbell up to chest height.</StyledLi>
                <StyledLi> Return to starting position and repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <div class="container main">
          <div class="muscle-group">
            Dumbbell Spider Curl
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell spider curl.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumbell spider curl side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi> Hold the dumbbells with a neutral grip (thumbs facing the ceiling).</StyledLi>
                <StyledLi>Slowly lift the dumbbell up to chest height.</StyledLi>
                <StyledLi> Return to starting position and repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>


      </section>
    </div>
  )
}
