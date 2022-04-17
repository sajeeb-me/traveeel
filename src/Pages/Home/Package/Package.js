import React from 'react';
import { useNavigate } from 'react-router-dom';

const Package = ({ pack }) => {
    const navigate = useNavigate()
    const { name, img, description, price } = pack;
    return (
        <div>
            <section className='border rounded-xl'>
                <div className='flex justify-center'>
                    <img className='rounded-lg w-full' src={img} alt="" />
                </div>
                <div className='text-left p-3'>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-sm my-3'>{description}</p>
                    <div className='flex justify-between items-end'>
                        <button onClick={() => navigate('/checkout')} className=' bg-sky-700 py-2 px-5 text-white rounded-md hover:bg-sky-800 duration-200 ease-in'>Book now</button>
                        <p className='text-2xl font-bold'>${price}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Package;