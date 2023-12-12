import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Main.css';
// import Particle from './particle';
import {
  AiFillGithub,

} from "react-icons/ai";
// import Particles from "@tsparticles/react";
function Main() {
  return (
    <section className="home">
      <Container fluid className="home-section" id="about">
        <Container>
          <Row>
            <Col md={13} className="home-about-description">
              <h1 style={{ fontSize: "50px" }}>
                Выпускник <b className="violet" >SINERGY </b>
              </h1>
              <p className="home-about-body">
                Начинающий Веб-разработчик
                <br />
                <br />Изучила
                <i>
                  <b className="violet"> Html / Css  </b>
                </i>
                <br />
                <br />

                &nbsp;Начала изучать
                <i>
                  <b className="violet"> React.js и Javascript </b>
                </i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={13} className="home-about-social">
              <h1>Я на GitHub</h1>

              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/oh-natali"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

              </ul>
            </Col>
          </Row>
        </Container>
      </Container></section>

  );
}


export default Main;
