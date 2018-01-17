import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';

export default props => (
  <div>
    <Header />
    <Grid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <SearchBar />
          <Button bsStyle="success mt-2">Button</Button>
        </Col>
      </Row>
    </Grid>
  </div>
);

