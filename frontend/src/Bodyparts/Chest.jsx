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
export default function Chest() {

    return (
        <div>

            <section className="content">
                <div className="container main">
                    <div className="muscle-group">
                        Dumbell Incline Bench Press
                    </div>
                    <br /><br />
                    <div>
                        <pre>

                        </pre>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <video width="100%" autoPlay loop muted>
                                <source src="/exercise videos/incline bench press.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-md-6">
                            <video width="100%" autoPlay loop muted>
                                <source src="/exercise videos/incline bench press side.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <StyledUl>
                                <StyledLi>Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.</StyledLi>
                                <StyledLi>Lower the bar to your mid chest</StyledLi>
                                <StyledLi >Raise the bar until you've locked your elbows.</StyledLi>
                            </StyledUl>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="container main">
                    <div className="muscle-group">
                        Push UP
                    </div>
                    <br /><br />
                    <div>
                        <pre>

                        </pre>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <video width="100%" autoPlay loop muted>
                                <source src="/exercise videos/pushup video.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-md-6">
                            <video width="100%" autoPlay loop muted>
                                <source src="/exercise videos/pushup side.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <StyledUl>
                                <StyledLi > Place your hands firmly on the ground, directly under shoulders.</StyledLi>
                                <StyledLi >Flatten your back so your entire body is straight and slowly lower your body</StyledLi>
                                <StyledLi > Draw shoulder blades back and down, keeping elbows tucked close to your body.</StyledLi>
                                <StyledLi>Exhale as you push back to the starting position.</StyledLi>
                            </StyledUl>
                        </div>
                    </div>
                </div>
            </section>
            <Link className='btn btn-primary mx-auto my-20' to='/'>Back to home.</Link>
        </div>
    )
}
