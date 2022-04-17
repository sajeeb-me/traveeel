import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../..//icons/facebook.png'
import TwitterIcon from '../../..//icons/twitter.png'
import GitIcon from '../../..//icons/github.png'

const Footer = () => {
    return (
        <div className='bg-sky-700 py-4 px-5 md:px-[120px] text-white flex justify-between text-left'>
            <section>
                <Link to='/' className='text-2xl font-semibold'><p>Traveeel</p></Link>
                <p className='text-xs opacity-50 font-thin mt-1'>Copyright &copy; 2022</p>
            </section>
            <section>
                <h3 className=' mb-2 text-sm opacity-50'>Get Connected</h3>
                <div className='flex gap-5'>
                    <button><img className='h-8 border rounded-full p-1' src={FacebookIcon} alt="" /></button>
                    <button><img className='h-8 border rounded-full p-1' src={TwitterIcon} alt="" /></button>
                    <button><img className='h-8 border rounded-full p-1' src={GitIcon} alt="" /></button>
                </div>
            </section>
        </div>
    );
};

export default Footer;