import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultBar from '../components/SearchResultBar/SearchResultBar';
import Filter from '../components/Filter/Filter';

export default props => (
  <div className="outer-wrapper">
    <Header />
    <main>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12} className="pl-0 pr-0">
            <SearchBar />
            <SearchResultBar />
            <Filter />
            <Button>Button</Button>
          </Col>
        </Row>
      </Container>
    </main>
  </div>
);

