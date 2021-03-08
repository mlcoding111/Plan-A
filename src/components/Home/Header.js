import React from "react";
import { Row, Container, Button, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Container>
        <Row className="d-flex align-items-center justify-content-center h-100 ">
          <Col xl="12" className="text-center header-text">
            <h2>Faites confiance en</h2>
            <h1>Votre plan A</h1>
            <p>Toujours 25% moins chers que nos concurrents</p>
          </Col>
          <Link to="/contact"><Button variant="light" id="contact-btn" className="mx-2">Contactez-nous</Button></Link>
          {/* <Button variant="light">Nos services</Button> */}
        </Row>
      </Container>
    </header>
  );
}
