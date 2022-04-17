import React from 'react';
import { BiMap } from 'react-icons/bi'

const SearchTrip = () => {
    return (
        <div>
            <section className='flex justify-center gap-3 my-3 shadow-md w-[850px] py-5 rounded-2xl absolute bg-white -bottom-14 left-60'>
                <div className='flex gap-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiMap /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="location">Location</label>
                        <input className='text-sm outline-none' type="text" name="location" id="location" placeholder='Where do you want to go?' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiMap /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="location">Location</label>
                        <input className='text-sm outline-none' type="text" name="location" id="location" placeholder='Where do you want to go?' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiMap /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="location">Location</label>
                        <input className='text-sm outline-none' type="text" name="location" id="location" placeholder='Where do you want to go?' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchTrip;