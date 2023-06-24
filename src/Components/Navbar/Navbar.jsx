import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-cyan-50 h-[80px]'>
            <div className='p-4'> <img src="../../assets/favicon.png" alt="Website Logo" /> </div>
            <div className='p-4'>
                <ul className='flex'>
                    <li className='list-none px-2 hover:border-b hover:border-red-500'><a className='active:bg-red-300 ' href="/">Home</a></li>
                    <li className='list-none px-2 hover:border-b hover:border-red-500'><a className='active:bg-red-300 ' href="/allorders">All Orders</a></li>
                    <li className='list-none px-2 hover:border-b hover:border-red-500'><a className='active:bg-red-300 ' href="/regulardelivery">Regular Delivery</a></li>
                    <li className='list-none px-2 hover:border-b hover:border-red-500'><a className='active:bg-red-300 ' href="/expressdelivery">Express Delivery</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;