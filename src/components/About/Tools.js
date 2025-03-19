import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiDocker,
    SiAmazonaws,
    SiGithub,
    SiFigma,
    SiAndroidstudio,
    SiWebstorm,
    SiXcode,
    SiJira,
    SiMicrosoftazure,
    SiJenkins
} from "react-icons/si";
import "../../styles/TechStack.css";

function Tools() {
    const tools = [
        { icon: <SiVisualstudiocode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <SiFigma />, name: "Figma" },
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiWebstorm />, name: "WebStorm" },
        { icon: <SiXcode />, name: "Xcode" },
        { icon: <SiJira />, name: "JIRA" },
        { icon: <SiMicrosoftazure />, name: "Microsoft Azure" },
        { icon: <SiJenkins />, name: "Jenkins (CI/CD)" }
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tool, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <div className="tech-container">
                        {tool.icon}
                        <span className="tool-name">{tool.name}</span>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Tools;
