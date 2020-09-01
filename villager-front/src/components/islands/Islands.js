import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap'

function Islands({islands}) {
  const list = islands && islands.map(island => 
    <li key={island.id}> 
      <Link to={`/islands/${island.id}`}
        className="link"> {island.name}</Link>
    </li>
  )

  return (
    <>
      <Col md={4} className="column">
        <ul className="card island-info centered">
          <h4>Islands</h4>
            {list}
        </ul>
      </Col>  
    </>
  )
}

export default Islands;