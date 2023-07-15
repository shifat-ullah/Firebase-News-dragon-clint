/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import RightNev from '../../sharepage/RightNev';
import Header from '../../sharepage/Header';
import Catagoris from '../Catagoris';

const NewsLayout = () => {
    return (
        <div>
           <Header></Header>
            <Container>
                <Row>

                    <Col lg={9}>
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

export default NewsLayout;