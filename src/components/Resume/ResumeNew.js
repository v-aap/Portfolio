import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumePdf from "../../Assets/Valeria Arce - Resume.pdf";
import coverLetterPdf from "../../Assets/Valeria Arce - Cover Letter.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />

          {/* Resume Section */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={resumePdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Row>

          <Row className="resume">
            <Document file={resumePdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          {/* Cover Letter Section */}
          <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
            <Button
                variant="primary"
                href={coverLetterPdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Cover Letter
            </Button>
          </Row>

          <Row className="resume">
            <Document file={coverLetterPdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;
