import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              <br />
              I am <span className="purple">Valeria Arce, </span>a passionate full-stack developer based in <span className="purple">Toronto, Canada.</span> My love for problem-solving and creativity led
              me to explore the world of web and app development, where I thrive on building digital solutions that
              simplify workflows and enhance user experience.

              <br />
              <br />
              I specialize in full-stack development with a strong focus on databases, web applications, and cloud-based
              solutions.
              <br />
              <br />
              I aspire to work on scalable applications that blend performance with great user experience while
              continuously learning and growing as a developer.
              <br />
              <br />
              Beyond coding, I enjoy activities that sharpen problem-solving skills and foster creativity:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Traveling to explore new cultures and cuisines
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing games and solving puzzles
              </li>
              <li className="about-activity">
                <ImPointRight /> Practicing mindfulness, movement, and continuous self-improvement
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "The only constant in technology is change." – Marc Andreessen
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
