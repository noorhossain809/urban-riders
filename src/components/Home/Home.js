import React from 'react';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';
import './Home.css'

const Home = () => {
    return (
        <div className='main-home'>
            
            <FakeData></FakeData>
        </div>
    );
};

export default Home;