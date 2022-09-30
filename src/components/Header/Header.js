import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <h2>Header</h2>
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Header;