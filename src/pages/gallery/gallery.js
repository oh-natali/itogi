import  './gallery.css';
import calcul from '../image/calcul.png';
import template from '../image/template.png';
import todo from '../image/todo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryCard from "./galleryCards";
import React from "react";

function Gallery() {
    return (

<Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          Мои <strong className="">Работы </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "190px" }}>

          <Col md={4} className="project-card">
            <GalleryCard
              imgPath={template}
              isBlog={false}
              title="Верстка сайта по макету из FIGMA"

            />
          </Col>

          <Col md={4} className="project-card">
            <GalleryCard
              imgPath={calcul}
              isBlog={false}
              title="Приложение калькулятор"
              description="Использование JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <GalleryCard
              imgPath={todo}
              isBlog={false}
              title="Список задач"
              description=""

            />
          </Col>
        </Row>
      </Container>
    </Container>

    )
}

export default Gallery;

