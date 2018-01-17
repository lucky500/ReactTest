import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';

export default props => (
  <div>
    <Header />
    <Grid>
      <Row>
        <Col xs={12}>
          <Button bsStyle="success">Button</Button>
        </Col>
      </Row>
    </Grid>
  </div>
);

