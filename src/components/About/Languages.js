import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiPython,
    DiJava,
    DiJavascript1,
    DiPhp,
} from "react-icons/di";
import {
    SiCsharp,
    SiSwift,
} from "react-icons/si";
import "../../styles/TechStack.css";

function Languages() {
    const techs = [
        { icon: <DiPython />, name: "Python" },
        { icon: <DiPhp />, name: "PHP" },
        { icon: <SiCsharp />, name: "C#" },
        { icon: <DiJava />, name: "Java" },
        { icon: <SiSwift />, name: "Swift" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
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

export default Languages;
