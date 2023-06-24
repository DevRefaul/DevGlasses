import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-cyan-50 h-[80px]'>
            <div className='p-4'> <img src="../../assets/favicon.png" alt="Website Logo" /> </div>
            <div className='p-4'>
                <ul className='flex' id='navitems'>
                    <li className='list-none hover:border-b hover:border-red-500 active'><Link className='p-2 mx-1' to="/">Home</Link></li>
                    <li className='list-none hover:border-b hover:border-red-500'><Link className='p-2 mx-1' to="/allorders">All Orders</Link></li>
                    <li className='list-none hover:border-b hover:border-red-500'><Link className='p-2 mx-1' to="/regulardelivery">Regular Delivery</Link></li>
                    <li className='list-none hover:border-b hover:border-red-500'><Link className='p-2 mx-1' to="/expressdelivery">Express Delivery</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;