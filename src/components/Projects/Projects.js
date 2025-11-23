import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LeaningPlatform from "../../Assets/Projects/download.jfif";
import Travelwonders from "../../Assets/Projects//Travel-Wonders.jfif"
import AadiShankaraGrandMart from "../../Assets/Projects/AadiShankara.png"

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
              imgPath={LeaningPlatform}
              isBlog={false}
              title="Chatify"
              description=""
              ghLink="https://github.com/Seshuadigopula/Automate-Learning-Platform"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AadiShankaraGrandMart}
              isBlog={false}
              title="Aadi Shankara Grand Mart"
              description=""
              ghLink="https://github.com/Seshuadigopula/Aadishankara_GrandMart"
              demoLink="https://aadishankara-grandmart.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description=""
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travelwonders}
              isBlog={false}
              title="Travel Wonders"
              description=""
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
