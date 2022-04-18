import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const Checkout = () => {
    const params = useParams();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const getName = event => {
        setName(event.target.value)
    }
    const getAddress = event => {
        setAddress(event.target.value)
    }
    const getPhone = event => {
        setPhone(event.target.value)
    }

    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name && address && phone) {
            toast.success("Thanks for your Booking")
        } else {
            toast.warning("Pleaser provide all information")
        }
    }

    return (
        <div className='min-h-[75vh] flex items-center justify-center'>
            <section>
                <div className='bg-sky-700 text-white p-8 my-10 flex justify-center items-center rounded-3xl'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Booking Confirmation</h1>
                        <p className='mt-2 opacity-60'>Please confirm your package no: {params.id}</p>
                        <form onSubmit={handleSubmit} className='w-full md:w-[400px] mx-auto text-left mt-8 pt-5 px-3 md:px-0'>
                            <input onBlur={getName} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="text" placeholder='Enter your full name' />

                            <input className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white opacity-70 border-b w-full' type="email" placeholder={`${user.email}`} disabled />

                            <input onBlur={getAddress} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="text" placeholder='Your address' />

                            <input onBlur={getPhone} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="text" placeholder='Phone number' />

                            <input className='block w-full mt-5 py-3 rounded-md font-semibold bg-white text-sky-700 cursor-pointer' type="submit" value="Confirm your Booking" />
                        </form>
                        <Link to='/'><p className='text-sm opacity-50 hover:opacity-100 my-2 duration-200 ease-in'>Want to change package?</p></Link>
                        <ToastContainer />
                    </div>
                </div>
            </section>



            {/*  <section>
                <h1 className='text-4xl font-semibold mb-5'>Your selected <span className='text-sky-700'>Package no: {params.id}</span> is available now.</h1>
                <button
                    type="button"
                    className="px-8 py-3 mb-1 bg-sky-700 text-white leading-tight rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Proceed to checkout
                </button>
            </section> */}
        </div>
    );
};

export default Checkout;