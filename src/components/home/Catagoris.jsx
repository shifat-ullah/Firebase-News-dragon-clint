/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CatagoriNewsCard from './catagoriNewsCard/CatagoriNewsCard';

const Catagoris = () => {

    const catagorinews = useLoaderData()
    console.log(catagorinews)

    // const {id} = useParams()
    return (
        <div className='mt-5'>
            <h2>this is catagorys : {catagorinews.length} </h2>
            {
                catagorinews.map(catagory => <CatagoriNewsCard
                key={catagory.id}
                catagory={catagory}
                ></CatagoriNewsCard>)
            }
        </div>
    );
};

export default Catagoris;