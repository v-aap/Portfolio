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
              Hi, I’m <b className="purple">Valeria Arce</b>, a full-stack developer based in <b className="purple">Toronto, Canada.</b>
              My passion for technology lies in its ability to transform ideas into <b className="purple">innovative solutions</b> that solve real-world challenges.
              <br />
              <br />
              I specialize in <b className="purple">web and mobile development</b>, with a strong focus on <b className="purple">database management, scalable APIs,</b> and <b className="purple">intuitive UI/UX design.</b>
              <br />
              <br />
              My goal is to develop software that is not only functional but also <b className="purple">forward-thinking</b>—solutions that evolve with user needs and technological advancements.
              <br />
              <br />
              Beyond coding, I engage in activities that enhance my <b className="purple">creativity</b> and <b className="purple">problem-solving skills:</b>
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Exploring new technologies and frameworks
              </li>
              <li className="about-activity">
                <ImPointRight /> Traveling and experiencing different cultures
              </li>
              <li className="about-activity">
                <ImPointRight /> Practicing mindfulness and continuous learning
              </li>
            </ul>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
