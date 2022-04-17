import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav className='flex justify-between items-center px-5 md:px-[120px] py-3 sticky top-0 bg-white z-10'>
            <Link to='/' className='text-2xl font-semibold hidden md:block'><p>Traveeel</p></Link>
            <div className='flex gap-2 md:gap-10'>
                <CustomLink className='hover:text-sky-700 py-1' to='/'>Home</CustomLink>
                {/* <CustomLink className='hover:text-sky-700 py-1' to='/explore'>Explore</CustomLink> */}
                <CustomLink className='hover:text-sky-700 py-1' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='hover:text-sky-700 py-1' to='/about'>About</CustomLink>
            </div>
            {
                user ?
                    <button onClick={() => signOut(auth)} className=' bg-sky-700 py-2 px-5 text-white rounded-md hover:bg-sky-800 duration-200 ease-in'>Sign out</button>
                    :
                    <div className='flex gap-4'>
                        <CustomLink className='hover:text-sky-700 py-1' to='/login'>Login</CustomLink>
                        <CustomLink className=' bg-sky-700 py-2 px-5 text-white rounded-md hover:bg-sky-800 duration-200 ease-in' to='/signup'>Signup</CustomLink>
                    </div>
            }
        </nav>
    );
};

export default Header;