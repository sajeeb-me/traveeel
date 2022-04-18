import React from 'react';
import { BiMap, BiCalendar, BiUserPlus, BiSearchAlt } from 'react-icons/bi'

const SearchTrip = () => {
    return (
        <div>
            <section className='md:flex justify-center items-center gap-3 my-3 shadow-md md:w-[850px] py-5 rounded-2xl bg-white md:relative bottom-20 left-60 mx-5 px-5'>
                <div className='flex gap-4 md:gap-2 py-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiMap /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="location">Location</label>
                        <input className='text-sm outline-none' type="text" name="location" id="location" placeholder='Where do you want to go?' />
                    </div>
                </div>
                <div className='h-[50px] w-[1px] bg-sky-300 mx-2 hidden md:block'></div>
                <div className='flex gap-4 md:gap-2 py-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiCalendar /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="date">Date</label>
                        <input className='text-sm outline-none' type="date" name="date" id="date" placeholder='Choose a date' />
                    </div>
                </div>
                <div className='h-[50px] w-[1px] bg-sky-300 mx-2 hidden md:block'></div>
                <div className='flex gap-4 md:gap-2 py-2'>
                    <div>
                        <h1 className='bg-sky-700 p-1 rounded-full bg-opacity-20 text-sky-700'><BiUserPlus /></h1>
                    </div>
                    <div className='text-left'>
                        <label className='block text-sky-700 font-semibold' htmlFor="person">Person</label>
                        <input className='text-sm outline-none' type="number" name="person" id="person" placeholder='How many People?' />
                    </div>
                </div>
                <button className='bg-sky-700 px-3 py-2 text-2xl rounded-lg text-white hover:bg-sky-800 duration-200 ease-in'>
                    <h1><BiSearchAlt /></h1>
                </button>
            </section >
        </div >
    );
};

export default SearchTrip;