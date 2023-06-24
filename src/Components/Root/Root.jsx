import React from 'react';
import Home from '../../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Home/>
            <Outlet/>
            
        </div>
    );
};

export default Root;