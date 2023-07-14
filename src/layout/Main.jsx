import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Leftsidenev from '../components/sharepage/Leftsidenev';
import RightNev from '../components/sharepage/RightNev';
import Header from '../components/sharepage/Header';

const Main = () => {
    return (
    
        <div>
             <Header></Header>
             <Container>
      <Row>
        <Col lg={3}>
            <Leftsidenev></Leftsidenev>
        </Col>
            
        <Col lg={6}>
             <p>midyle point components</p>
        </Col>

        <Col lg={3}>
            <RightNev></RightNev>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Main;