import React, { useState } from "react";
import { Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from "./Header";
import Services from './Services/Services'
import MapContainer from './Map/MapContainer'

import IphoneImage from '../../img/iphone-7.svg'

import Fade from 'react-reveal/Fade';

function Home() {
  const [loc, setloc] = useState({ lat: 48.499, lng: -78.628 })


  return (
    <div>
      <Header />
      <section id="services">
        <Services />
      </section>

      <section id="location">
        <Row>

          <Container className="text-center p-3">
            <Fade>
              <h2>Ou sommes-nous situé ?</h2>
              <span id="ville-info">Rouyn-Noranda, Abitibi-Témiscamingue.</span>
              <Row className="p-3">
                <Col md="12">
                  <p className="long-text">
                    Nous couvrons les villes suivantes, et toutes autres villes dans un rayon de <b>100km&sup2;</b>
                  </p>
                </Col>
              </Row>
              <Row className="region-list p-3">
                <Col md="6">
                  <h5>Amos</h5>
                </Col>
                <Col md="6">
                  <h5>La sarre</h5>
                </Col>
                <Col md="6">
                  <h5>Val-d'Or</h5>
                </Col>
                <Col md="6">
                  <h5>Rouyn-Noranda</h5>
                </Col>
              </Row>
              <hr></hr>
            </Fade>
          </Container>


          <div className="container-fluid map-wrap text-center mb-3">
            <MapContainer lat={loc.lat} long={loc.lng} />
          </div>
        </Row>
      </section>

      <section id="why-us">
        <Container >
          <Fade>
            <Row className="d-flex justify-content-center">
              <Col md="5" lg="6" className="d-flex justify-content-center">
                <img src={IphoneImage} width="50%" />
              </Col>
              <Col md="6" lg="6" className="d-flex justify-content-center">
                <ul id="why-us-list">
                  <li><h3 className="d-inline">Pourquoi Plan A ?</h3></li>
                  <hr></hr>
                  <li><h6>Service Professionnel</h6></li>
                  <li><h6>Estimation de prix</h6></li>
                  <li><h6>Prix très abordable</h6></li>
                  <li><h6>Garantie après vente</h6></li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </Container>

      </section>

      <section id="who-are-we">
        <Fade>
          <h1>A propos</h1>
          <hr></hr>
          <Row className="text-center d-flex justify-content-center">
            <Col md="12" lg="6">
              <p className="long-text p-3">Plan A est une compagnie privée qui offrent la réparation d'appareil mobile pour IPHONE seulement. Pour passer une commande , il vous suffit d'envoyer un courriel avec les informations demander pour accélérer le processus . Ça vous intéresse ?</p>
              <Link to="/contact"><Button variant="light" id="order-btn" className="mx-2">Passer une commande</Button></Link>
              <Link to="/prix"><Button variant="light">Consultez les prix</Button></Link>
            </Col>
          </Row>
          <hr></hr>
        </Fade>
      </section>
    </div>
  );
}

export default Home;
