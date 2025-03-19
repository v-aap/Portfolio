import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Languages from "./Languages";
import Databases from "./Databases";
import OperatingSystems from "./OperatingSystems";
import Tools from "./Tools";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Frameworks from "./Frameworks";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who I am in <strong className="purple">Code</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Languages </strong>
        </h1>
        <Languages />

        <h1 className="project-heading">
          <strong className="purple">Frameworks</strong> & <strong className="purple"> Libraries </strong>
        </h1>
        <Frameworks />

        <h1 className="project-heading">
          <strong className="purple">Databases</strong>
        </h1>
        <Databases />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> & <strong className="purple"> Platforms </strong>
        </h1>
        <Tools />

        <h1 className="project-heading">
          <strong className="purple">Operating Systems</strong>
        </h1>
        <OperatingSystems />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
