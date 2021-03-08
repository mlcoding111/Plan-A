import React from "react";

import Service from "./Service";
import Fade from 'react-reveal/Fade';
import { Container, Button, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";



export default function Services() {
  const services = [
    {
      titre: "Caméra",
      image: "fas fa-camera",
      size: "3x",
      description: "Services de remplacement de caméra",
    },
    {
      titre: "Batterie",
      image: "fas fa-battery-half",
      size: "3x",
      description: "Services de remplacement de batterie",
    },
    {
      titre: "Écran",
      image: "fas fa-tablet",
      size: "3x",
      description: "Services de remplacement d'écran",
    },
    {
      titre: "Garantie après vente",
      image: "fas fa-umbrella",
      size: "3x",
      description: [
        "Service de garantie complet après vente."
      ],
    },
    {
      titre: "Réparation estimation",
      image: "fas fa-credit-card",
      size: "3x",
      description:
        "Estimation complète avec devis détailler des réparations à faire",
    },
    {
      titre: "Pret de téléphone",
      image: "fas fa-mobile",
      size: "3x",
      description: "Pret de téléphone pendant les services",
    },
  ];
  return (
    <>
      <Container className="text-center">
        <Fade>
        <h1>Services</h1>
        <p className="text-danger">
          * Les services suivants s'appliquent seulement avec les produits apple
        </p>
        <hr></hr>

          <Row className="d-flex justify-content-center align-items-center px-5 text-center">
            {services.map((index, i) => (
              <Col xl="4" md="6" sm="12" key={i}>
                <Service
                  titre={index.titre}
                  image={index.image}
                  size={index.size}
                  description={index.description}
                />
              </Col>
            ))}
          </Row>
          </Fade>
      </Container>
    </>
  );
}
