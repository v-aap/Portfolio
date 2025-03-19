import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiWindows, SiMacos } from "react-icons/si";
import "../../styles/TechStack.css";

function OperatingSystems() {
    const osList = [
        { icon: <SiLinux />, name: "Linux" },
        { icon: <SiWindows />, name: "Windows" },
        { icon: <SiMacos />, name: "macOS" },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {osList.map((os, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <div className="tech-container">
                        {os.icon}
                        <span className="tech-name">{os.name}</span>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default OperatingSystems;