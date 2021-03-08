import React from 'react'
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default function Contact() {
    return (
        <div className="contact-us-section pb-5 shadow-lg">
            <Container className="contact-wrapper text-dark text-center">
                <Jumbotron>
                    <Row>
                        <Col md="12">
                            <h1>Contact</h1>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row id="contact-infos">
                        <Col md="12" lg="6" className=" mt-5">
                            <FontAwesome className="far fa-envelope mr-3" size="3x" /><span>Jeremy.perrier@hotmail.com</span>
                        </Col>
                        <Col md="12" lg="6" className=" mt-5">
                            <FontAwesome className="fas fa-mobile mr-3" size="3x" /> <span>819-290-4318</span>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className="d-flex justify-content-center pt-3 px-3">
                        <p className="long-text">Veuillez fournir les informations suivantes lors de votre commande</p>
                    </Row>
                    <ol className="text-left contact-info">
                        <Col md="6">
                            <li>Prénom</li>
                            <li>Nom</li>
                            <li>Téléphone</li>
                        </Col>
                        <Col md="6">
                            <li>Courriel</li>
                            <li>Descripton du problème</li>
                            <li>Disponibilité</li>
                        </Col>
                    </ol>
                    <a href="mailto:Jeremy.perrier@hotmail.com"><Button variant="light" id="order-btn">Commander</Button></a>
                </Jumbotron>
            </Container>
        </div>
    )
}
