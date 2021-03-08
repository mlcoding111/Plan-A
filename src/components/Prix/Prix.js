import React from 'react'
import { Col, Row, Button, Container, Jumbotron } from 'react-bootstrap'

import PrixTable from './PrixTable'


export default function Prix() {

    const devices = require("../../localDB/devices.json")

    return (
        <div className="prix-wrapper pb-5">
            <Container>
                <p className="long-text text-center">*Pour un modèle différent que ceux affichés ci-dessous, veuillez me contacter pour une estimation*</p>
                <table>
                    <thead>
                        <tr>
                            <th>Appareil</th>
                            <th>Batterie</th>
                            <th>Écran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.devices.map((index, i) => (
                            <PrixTable device={index.deviceType} battery={index.prix[0].battery} screen={index.prix[0].screen} />
                        ))}
                    </tbody>
                </table>
            </Container>

        </div>
    )
}
