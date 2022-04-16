import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex'>
            <Link to='/'><p>Traveeel</p></Link>
            <div className='flex'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
            <div className='flex'>
                <CustomLink to='/login'>Login</CustomLink>
                <CustomLink to='/signup'>Signup</CustomLink>
            </div>
        </nav>
    );
};

export default Header;