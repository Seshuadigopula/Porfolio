import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Seshu Kumar Adigopula</span>{" "}
            from <span className="purple">Vijayawada, India</span>.
            <br />
           I’m a passionate <span className="purple">Full Stack Developer</span> with hands-on experience in building scalable and user-focused web 
           applications. <br /> I enjoy turning ideas into functional products using modern technologies like 
           <span className="purple">React, Node.js, Laravel, and Spring Boot.</span>
            <br/> I love solving real-world problems, improving user experience, and writing clean, maintainable code.<br/>
             I’m constantly learning and building projects that challenge me and help me grow as a developer. <br/>My goal is to work on impactful solutions while continuously improving my skills in full-stack development and system design.
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">seshukumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
