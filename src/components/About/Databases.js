import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMysql } from "react-icons/di";
import { SiMongodb, SiPostgresql, SiFirebase, SiGraphql } from "react-icons/si";
import "../../styles/TechStack.css";

function Databases() {
    const databases = [
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiGraphql />, name: "GraphQL" },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {databases.map((db, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    <div className="tech-container">
                        {db.icon}
                        <span className="tech-name">{db.name}</span>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Databases;
