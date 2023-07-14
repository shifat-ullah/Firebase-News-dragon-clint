/* eslint-disable no-unused-vars */
import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
import Bg from '../../../assets/bg.png'

const Qzoone = () => {
    return (
        <div className='bg-secondary mt-5'>
            <h2 className='text-white mb-3'>Q-Zone</h2>
            <div>
              <img src={QZone1} alt="" />
              <img src={QZone2} alt="" />
              <img src={QZone3} alt="" />
            </div>

            <div className=''>
                <div>
                    <img src={Bg} alt=""  className='position-absolute'/>
                </div>
                <div>
                    <h2>Create an Amazing Newspaper</h2>
                </div>
            </div>
        </div>
    );
};

export default Qzoone;