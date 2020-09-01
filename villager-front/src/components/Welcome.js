import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from './button'

function Welcome() {
  return (
    <Row>
      <Col md={4} className="column">
        <div className="card island-info centered">
          <strong>Welcome to Village Watch: New Horizons!</strong> <br/>
          Recreate your Animal Crossing island, keep track of your villagers, give them the boot or add new ones! Click on 'New Island' to get started!

          <Button />
        </div>
      </Col>
    </Row>
  )
}

export default Welcome;