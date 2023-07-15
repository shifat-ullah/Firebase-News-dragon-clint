/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Leftsidenev = () => {
    const [catagoris, setCatagoris]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/catagoris')
        .then(res => res.json())
        .then(data => setCatagoris(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='mt-5'>
           <h2>All Caterogy</h2>
           {
            catagoris.map(catagori => <p key={catagori.id}>

                <Link to={`/catagori/${catagori.id}`}>{catagori.name}</Link>
            </p>)
           
           }
        </div>
    );
};

export default Leftsidenev;