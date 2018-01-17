import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultBar from '../components/SearchResultBar/SearchResultBar';

export default props => (
  <div className="outer-wrapper">
    <Header />
    <main>
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12} className="pl-0 pr-0">
            <SearchBar />
            <SearchResultBar />
            <Button bsStyle="success mt-2">Button</Button>
          </Col>
        </Row>
      </Grid>
    </main>
  </div>
);

