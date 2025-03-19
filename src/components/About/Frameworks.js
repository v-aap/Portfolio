import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiBootstrap, SiSpring, SiDotnet, SiSocketdotio, SiGraphql, SiSwift } from "react-icons/si";
import "../../styles/TechStack.css";

function Frameworks() {
    const techs = [
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <DiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
        { icon: <DiReact />, name: "React Native" },
        { icon: <SiSpring />, name: "Spring Boot" },
        { icon: <SiDotnet />, name: "MVC.NET Core" },
        { icon: <SiSwift />, name: "SwiftUI" },
        { icon: <SiSocketdotio />, name: "Socket.io" },
        { icon: <SiGraphql />, name: "GraphiQL" },
        { icon: "🔑", name: "OAuth 2.0" },
        { icon: "🔐", name: "JWT" },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techs.map((tech, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <div className="tech-container">
                        {tech.icon}
                        <span className="tech-name">{tech.name}</span>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Frameworks;
