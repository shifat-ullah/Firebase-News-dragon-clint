/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import ListGroup from 'react-bootstrap/ListGroup';
import Qzoone from './Qzoon-right-pic/Qzoone';

const RightNev = () => {
    return (
        <div className=' mt-5' >
            <h2>Login with</h2>

            <div className='mb-2 mt-3'><Button variant="secondary"><FaGoogle /> Login with Google</Button></div>
            <div><Button variant="success"><FaGithub /> Login with Github</Button></div>


            <div className='mt-5'>
                <h2>Find Us On</h2>
                <div className='mt-3'>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
                <Qzoone></Qzoone>
            </div>




        </div>


    );
};

export default RightNev;