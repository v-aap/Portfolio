import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dineTrack from "../../Assets/Projects/dineTrack.png";
import solCafe from "../../Assets/Projects/solCafe.jpeg";
import eventBooking from "../../Assets/Projects/eventBooking.webp";
import chatApp from "../../Assets/Projects/chatApp.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={dineTrack}
                  isBlog={false}
                  title="DineTrack"
                  description={
                    <>
                      An Android application designed to help users efficiently manage and enhance their
                      dining experiences. Built using{" "}
                      <span className="purple">Java, Android Studio, and SQLite</span>, it functions as a personal
                      restaurant guide, allowing users to organize, discover, and share restaurant details.
                      Integrated <span className="purple">Google Maps API</span> provides seamless location-based searches.
                    </>
                  }
                  ghLink="https://github.com/melinabehzadi/G69-DineTrack"
                  demoLink="https://youtu.be/oVMpsXNfJ7o"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={solCafe}
                  isBlog={false}
                  title="Sol Café and Lounge"
                  description={
                    <>
                      A web-based restaurant management system developed with{" "}
                      <span className="purple">React.js, Node.js, Express.js, and MongoDB</span>. The system streamlines
                      reservations, menu updates, and event management. Features an admin portal for managers,{" "}
                      <span className="purple">Stripe API</span> integration for seamless payments, and{" "}
                      <span className="purple">JWT authentication</span> for secure access.
                    </>
                  }
                  ghLink="https://github.com/Mobinazargary/Sol-Cafe"
                  demoLink="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={eventBooking}
                  isBlog={false}
                  title="Event Booking Platform"
                  description={
                    <>
                      A web application designed to simplify event and venue reservations. Built with{" "}
                      <span className="purple">Spring Boot, Java, MongoDB, and PostgreSQL</span>, the platform enables users to
                      book rooms, manage approvals, and track availability in real time. Secure authentication is
                      implemented using <span className="purple">JWT and OAuth 2.0</span> for a seamless booking experience.
                    </>
                  }
                  ghLink="https://github.com/oHastee/GBC_EventBooking-Group42"
                  demoLink="https://youtu.be/t4fdSgaCxgM"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={chatApp}
                  isBlog={false}
                  title="Real-Time Chat App"
                  description={
                    <>
                      A real-time chat application built using{" "}
                      <span className="purple">Node.js, Express, Socket.io, and MongoDB</span>. Supports private messaging,
                      group chats, real-time updates, and message persistence. Features include user authentication,
                      auto-refreshing messages, presence detection, and secure password hashing with{" "}
                      <span className="purple">bcrypt</span>.
                    </>
                  }
                  ghLink="https://github.com/v-aap/101462436_lab_test1_chat_app"
                  demoLink="#" // Replace with actual demo link
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={weatherApp}
                  isBlog={false}
                  title="Valeria's Weather App"
                  description={
                    <>
                      A modern <span className="purple">React</span> application that provides real-time weather updates for
                      any city worldwide. Fetches data from the{" "}
                      <span className="purple">OpenWeatherMap API</span> and displays essential weather details like temperature,
                      humidity, wind speed, and dynamic icons representing current conditions.
                    </>
                  }
                  ghLink="https://github.com/v-aap/101462436_comp3123_labtest2/tree/main/101462436_comp3123_labtest2"
                  demoLink="#" // Replace with actual demo link
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
