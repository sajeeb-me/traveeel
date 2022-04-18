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
            <Link to='/' className='text-2xl font-semibold hidden md:block'><p>Trav<span className='text-sky-700'>eee</span>l</p></Link>
            <div className='flex gap-2 md:gap-10'>
                <CustomLink className='hover:text-sky-700 py-1' to='/'>Home</CustomLink>
                <CustomLink className='hover:text-sky-700 py-1' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='hover:text-sky-700 py-1' to='/about'>About</CustomLink>
            </div>
            {
                user ?
                    <button onClick={() => signOut(auth)} type="button"
                        className="px-6 py-2 mb-1 bg-sky-700 text-white leading-tight rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light" to='/signup'>Sign out</button>
                    :
                    <div className='flex items-center gap-4'>
                        <CustomLink className='hover:text-sky-700 py-1' to='/login'>Login</CustomLink>
                        <CustomLink
                            type="button"
                            className="px-6 py-2 mb-1 bg-sky-700 text-white leading-tight rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light" to='/signup'>
                            Signup
                        </CustomLink>
                    </div>
            }
        </nav >
    );
};

export default Header;