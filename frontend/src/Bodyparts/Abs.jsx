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
export default function Abs() {
  return (
    <div>
      <section className="content">
        <div className="container main">
          <div className="muscle-group">
            Crunches
          </div>
          <br /><br />
          <div>
            <pre>

            </pre>
          </div>
          <div className="row">
            <div className="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/crunches.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/crunches side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <StyledUl>
                <StyledLi>Sit on the floor and flex your knees and hips to a 90 degree angle.</StyledLi>
                <StyledLi>Rotate your upper spine to engage your obliques.</StyledLi>

              </StyledUl>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="container main">
          <div className="muscle-group">
            Russian Dumbell Twist
          </div>
          <br /><br />
          <div>
            <pre>

            </pre>
          </div>
          <div className="row">
            <div className="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb russian twist.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="col-md-6">
              <video width="100%" autoPlay loop muted>
                <source src="/exercise videos/dumb russian twist side.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <StyledUl>
                <StyledLi > Stand with feet slightly wider than shoulder width apart. Hold the kettlebell in one hand and extend your arm above your head.</StyledLi>
                <StyledLi >Keeping your legs straight and the kettlebell above your head, lower the relaxed arm towards the ground, twisting your body towards the side of the raised arm.</StyledLi>
                <StyledLi >  Return to the starting potion, tilt your pelvis forward and repeat.</StyledLi>
              </StyledUl>
            </div>
          </div>
        </div>
        <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
      </section>
    </div>
  )
}
