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
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my love for coding and quickly realized that bringing ideas to life
              through development is my jam! 🚀
              <br />
              <br />I thrive in the world of
              <i>
                <b className="purple"> SQL, JavaScript, and React. </b>
              </i>
              <br />
              <br />
              My passion lies in crafting sleek &nbsp;
              <i>
                <b className="purple">user interfaces, interactive prototypes, </b>
                and diving deep into{" "}
                <b className="purple">
                  full-stack web and app development.
                </b>
              </i>
              <br />
              <br />
              I enjoy blending creativity with logic, making front-end experiences
              both beautiful and functional. 💡✨
              <br />
              <br />
              Whenever possible, I challenge myself by working with
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}modern JavaScript frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js.</b>
              </i>
              <br />
              <br />
              If you need someone to build something visually stunning
              and structurally sound—I'm your person! 🎨🛠️
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/v-aap"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/valeriaaarce"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
