/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CatagoriNewsCard = ({ catagory }) => {
    const { _id, title, details, image_url, author } = catagory;
    console.log(catagory)
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className=''>
                    <div className=''>
                        <Col xs={6} md={6} className='d-flex gap-2'>
                            <Image className='h-25 w-25' src={author.img} roundedCircle />
                            <div className=''>
                                <h4>{author.name}</h4>
                                <p> {author.published_date}</p>
                            </div>
                        </Col>
                    </div>
                </Card.Header> 
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>

                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default CatagoriNewsCard;