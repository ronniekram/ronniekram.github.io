import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Villager({match, villagers}) {
  const villager = villagers && villagers.find(villager => 
    villager.id == match.params.id)

    let history = useHistory();

  return (
    <>
      <Col md="auto" className="column">
        <Card className="card villager-info">
          <div><img src={ villager && villager.image} alt={villager && villager.name} className="vil-img"/></div>
          <Card.Body className="villager-info">
            <Card.Title className="villager-info"> <b>{villager && villager.name} </b> </Card.Title>
              <Card.Text className="villager-info">
                <b>Gender:</b> {villager && villager.gender} <br/>

                <b>Personality:</b> {villager && villager.personality} <br/>

                <b>Species:</b> {villager && villager.species} <br/>

                <b>Birthday:</b> {villager && villager.birthday}
              </Card.Text>
          </Card.Body>
        </Card>

          <button onClick={() => history.goBack()}>Back to Island</button>
        </Col>
    </>
  )
}

export default Villager;