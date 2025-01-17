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
export default function Calves() {
  return (
    <div>
      <section class="content">
        <div class="container main">
          <div class="muscle-group">
            Machine Standing Calf Raises
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/calves raises1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/calves raises2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi>Adjust the machine in accordance with your height and place your shoulders underneath the padded lever.</StyledLi>
                <StyledLi>The balls of your feet should be supporting your weight on the calve block, your heels extending off of it.</StyledLi>
                <StyledLi>Extend your heels upwards while keeping your knees stationary, and pause at the contracted position.</StyledLi>
                <StyledLi>Slowly return to the starting position. Repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div class="container main">
          <div class="muscle-group">
            Machine Seated Calf Raises
          </div>
          <div>
            <pre>

            </pre>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/calves seated raises1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/calves seated raises2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <StyledUl>
                <StyledLi> Get comfortable on the machine, then place your lower thighs beneath the padded lever.
                  Place your toes and the balls of your feet onto the foot supports.</StyledLi>
                <StyledLi>Prevent the weight from slipping forward by gripping the handles, and release the safety bar.
                  Lower the weight until your calves are extended.</StyledLi>
                <StyledLi> Push your heels up to lift the padded lever and hold the contracted position, then slowly lower back down to the starting position. Repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
        <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
      </section>
    </div>
  )
}
