import React from 'react';
import Header from '../SharePage/Home/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePage/Home/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;