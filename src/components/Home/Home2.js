import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a passionate <span className="purple">Full-Stack Developer</span> who thrives in the ever-evolving
                world of technology.
                My journey into development has been fueled by a deep love for <span className="purple">problem-solving</span>
                , <span className="purple">design</span>, and the endless potential of software to reshape the way we
                interact with the digital world.
                <br />
                <br />
                My expertise spans across
                <i>
                  <b className="purple"> JavaScript, SQL, React, Node.js, and database management. </b>
                </i>
                <br />
                <br />
                In this industry, <span className="purple">adaptability</span> is not just an asset—it’s a necessity.
                I embrace the reality that what works today may be obsolete tomorrow, which is why I’m always pushing
                myself to <span className="purple">learn, evolve, and refine my craft</span>.
                <br />
                <br />
                <p style={{ color: "rgb(155 126 172)" , textAlign: "center"}}>
                  "The only constant in technology is change."
                  <br/>
                  – Marc Andreessen
                </p>
                <br />
                <span className="purple">Technology isn’t static, and neither am I. </span>
                Every project I take on is an opportunity to build something better, improve user experiences, and
                explore new, cutting-edge solutions.
                Whether it’s crafting <span className="purple">seamless front-end interfaces</span> or architecting
                <span className="purple"> scalable backends</span>, I am always ready to adapt, innovate, and push
                boundaries.
                <br />
                <br />
                If you're looking for a developer who blends <span className="purple">creativity with logic </span>
                to deliver high-impact solutions, let’s connect! 🎨🛠️
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Let's collaborate! Feel free to <span className="purple">connect</span> with me:
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/v-aap"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/valeriaaarce"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;
