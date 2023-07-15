/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Container>
                <div className='text-center mt-5'>
                    <img src={logo} alt="" />
                    <p>Journalism Without Fear or Favour</p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>

                <div className='d-flex '>
                    <Button variant="success">Latest</Button>
                    <Marquee speed={50} pauseOnClick={5} className='pointer'>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>

                <div>
                    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-3">
                        <Container>
                           
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto">
                                <Nav.Link to="/">Home</Nav.Link>
                                    <Nav.Link to="/about">About</Nav.Link>
                                    <Nav.Link to="/Career">Career</Nav.Link>

                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">profile</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant="success">Login</Button>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Container>
        </div>
    );
};

export default Header;