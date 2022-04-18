import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignupImage from '../../images/signup.jpg';
import SocialMidea from '../SocialMidea/SocialMidea';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmail = inputValue => {
        setEmail(inputValue)
    }
    const handlePass = inputValue => {
        setPass(inputValue)
    }

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, passSending, passError] = useSendPasswordResetEmail(auth);


    if (signInUser) {
        navigate(from, { replace: true })
    }
    if (signInLoading) {
        return <Loading />
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!signInError) {
            await signInWithEmailAndPassword(email, pass)
        }
        else {
            switch (signInError?.code) {
                case "auth/invalid-email":
                    toast.error("Invalid Email!");
                    return;
                case "auth/wrong-password":
                    toast.error("Wrong Password!");
                    return;
                default:
                    toast.error("Something went wrong!")
            }
        }
    }
    const handlePassReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.info("Reset link sent")
        } else {
            toast.error("Please provide your email.")
        }
    }

    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-[150px] my-10'>
                <div className='hidden md:block'>
                    <img className='w-full h-[600px] rounded-l-3xl' src={SignupImage} alt="" />
                </div>
                <div className='bg-sky-700 text-white p-5 flex justify-center items-center rounded-3xl md:rounded-r-3xl md:rounded-l-none'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Login</h1>
                        <form onSubmit={handleSubmit} className='w-full md:w-[400px] mx-auto text-left mt-8 pt-5 px-3 md:px-0'>
                            <input onBlur={(event) => handleEmail(event.target.value)} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="email" placeholder='Email' />

                            <input onBlur={(event) => handlePass(event.target.value)} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="password" placeholder='Password' />

                            <input className='block w-full mt-5 py-2 rounded-md font-semibold bg-white text-sky-700 cursor-pointer' type="submit" value="Login" />
                        </form>
                        <button onClick={handlePassReset}><p className='opacity-50 hover:opacity-100 mt-2 duration-200 ease-in'>Forget password?</p></button>
                        <Link to='/signup'><p className='opacity-50 hover:opacity-100 my-2 duration-200 ease-in'>Don't have account?</p></Link>
                        <div>
                            <SocialMidea />
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;