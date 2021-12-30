import React, { useEffect, useState } from 'react';
import data from '../../data/data.json'
import MainHeader from '../MainHeader/MainHeader';

const FakeData = () => {
    // console.log(data)
    const [rider, setRider] = useState([])

    useEffect(() => {
        setRider(data)
    }, [])
    
    return (
        <div className='row'>
            {
                rider.map(rdr => <MainHeader rider={rdr}></MainHeader>)
            }
        </div>
    );
};

export default FakeData;