import React from "react";
import Card from "react-bootstrap/Card";

import Techstack from "../portfolio/techstack";
import './portfolio.css';


function PortfolioNew() {
    return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
             Привет! <span className="violet">Я из Москвы , </span>
              отучилась на психолога<span className="violet"> в 34 поменяла направление</span>
              <br />
              <br />
              Прокачиваю навыки написания кода
              <br />  <Techstack />
             
              Кроме веб-разработки я люблю-
            </p>
            <ul>
              <li className="about-activity">
                <h2 /> Путешествовать
              </li>
              <li className="about-activity">
                <h2 /> Изготавливать предметы декора
              </li>
              <li className="about-activity">
                <h2 /> Готовить
              </li>
            </ul>

           
          </blockquote> 
        </Card.Body>
      </Card>
    );
  }
  export default PortfolioNew;
  
