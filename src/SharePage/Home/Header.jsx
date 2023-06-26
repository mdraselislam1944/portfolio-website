import React from 'react';
import { Link } from 'react-router-dom';
import rasel from '../../../public/rasel.jpg'

const Header = () => {
    return (
        <div className='flex items-center justify-between my-2 mx-10'>
            <div>
                <img className='rounded-full h-16 w-16 mx-5' src={rasel} alt="" />
                <h1>Md Rasel <span className='text-orange-300'>Islam</span></h1>
            </div>
            {/* <div className='flex justify-between items-center'>
                <h1>Md Rasel Islam</h1>
                <img className='rounded-full h-16 w-16 mx-5' src={rasel} alt="" />
            </div> */}
            <div>
                <Link to='/' className='mx-2 btn btn-info'>home</Link>
                <Link to='/' className='mx-2 btn btn-info'>about</Link>
                <Link to='/' className='mx-2 btn btn-info'>service</Link>
                <Link to='/' className='mx-2 btn btn-info'>Contract</Link>
                <Link to='/' className='mx-2 btn btn-info'>projects</Link>
            </div>
            <div>
                <Link to='/' className='mx-2 btn btn-info'>blogs</Link>
                <Link to='/' className='mx-2 btn btn-info'>resume</Link>
            </div>
        </div>
    );
};

export default Header;