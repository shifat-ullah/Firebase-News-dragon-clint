/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import Leftsidenev from '../components/sharepage/Leftsidenev';
import RightNev from '../components/sharepage/RightNev';
import Header from '../components/sharepage/Header';
import Catagoris from '../components/home/Catagoris';
import Home from '../components/home/Home';

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
                        <Outlet />
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