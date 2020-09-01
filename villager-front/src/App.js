import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Container, Row } from 'react-bootstrap';
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';


function App({fetchIslands, fetchVillagers}) {

  useEffect(() => {
    fetchIslands();
    fetchVillagers();
  },[fetchIslands, fetchVillagers])

    return (
      <>
      <Container className="container">
        <Router> 
          <Header />
          <Navbar />
          <Row>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/islands" render={(routerProps) => <IslandsContainer {...routerProps} /> } />
            <Route path="/villagers" render={(routerProps) => <VillagersContainer {...routerProps} />} />
          </Row>
        </Router>
        <Footer />
      </Container>
      </>
    )
  }

  const mapStateToProps = (state) => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps, {fetchIslands, fetchVillagers})(App);