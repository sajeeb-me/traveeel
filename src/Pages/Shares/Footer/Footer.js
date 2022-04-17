import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../..//icons/facebook.png'
import TwitterIcon from '../../..//icons/twitter.png'
import GitIcon from '../../..//icons/github.png'

const Footer = () => {
    return (
        <div className='bg-sky-700 py-8 px-5 md:px-[120px] text-white flex flex-wrap justify-between items-center'>
            <Link to='/' className='text-2xl font-semibold'><p>Traveeel</p></Link>
            <p className='text-xs opacity-50 font-thin'>Copyright &copy; 2022</p>
            <section className='flex items-center gap-5'>
                <h3 className='text-sm opacity-50'>Get Connected</h3>
                <div className='h-5 w-[1px] bg-white opacity-50'></div>
                <div className='flex gap-5 py-2'>
                    <button><img className='h-8 border rounded-full p-1' src={FacebookIcon} alt="" /></button>
                    <button><img className='h-8 border rounded-full p-1' src={TwitterIcon} alt="" /></button>
                    <button><img className='h-8 border rounded-full p-1' src={GitIcon} alt="" /></button>
                </div>
            </section>
        </div>
    );
};

export default Footer;