import React from 'react';
import { Form, Col } from 'react-bootstrap';
import create from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/create.png'

function IslandInput({setName, setOwner, name, owner, handleSubmit}) {

  return (
        <Col md="auto" className="column">
          <Form onSubmit={handleSubmit} className="container card centered">
            <h4>Create An Island</h4>
            <Form.Label size="sm" >Island Name: </Form.Label>
              <Form.Control size="sm" type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
          <br />
            <Form.Label size="sm" >Owner Name: </Form.Label>
              <Form.Control size="sm" type='text' value={owner} name="owner" onChange={(e) => setOwner(e.target.value)} />
          <br />
            <button type="submit"> <img src={create} alt="Create Island" className="form" /> </button>
         </Form>
        </Col>
  )
}


export default IslandInput;