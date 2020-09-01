import React from 'react';
import { connect } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import Villagers from '../villagers/Villagers';
import SearchBar from '../villagers/SearchBar';
import islandX from '../img/islandX.png';


function Island({islands, villagers, handleDelete, handleRemove, match}) {
  const island = islands.find(island => island.id == match.params.id)

    const village = villagers.filter(villager => villager.island_id == match.params.id)
    return (
      <>
        <Col md={4} className="column">
          <Card className="card island-info">
            <Card.Body>
              <Card.Title>
                {island && island.name}
              </Card.Title>
              <Card.Subtitle>
                {island && island.owner}
              </Card.Subtitle>
                <p>Villagers:</p>
                <Villagers villagers={village} island={island}/>
                <button onClick={() => {
                  return handleDelete(island.id);}}> 
                   <img src={islandX} alt="Delete Island?" /> 
                </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="column">
            <SearchBar island={island} />
        </Col>
    </>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps)(Island);