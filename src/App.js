import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components'
import Posts from './components/Posts';
import PostForm from './components/Postform';
import PinCode from './components/User_Pincode'
import ViscinityDistricts from './components/district_viscinity_calculator'
import DisplayAppointments from './components/display_appointments_tab'

import store from './store';

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 2, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stab me soon</h1>
          </header>
          <ThemeProvider theme={theme}>
          <Grid fluid>
              <Row>
                <Col xs={5}  md={5}>
                  <PinCode />
                </Col>
                <Col xs={5}  md={5}>
                  <ViscinityDistricts/>
                </Col>
              </Row>
              <Row>
                <Col><DisplayAppointments/></Col>
              </Row>
          </Grid>
          </ThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
