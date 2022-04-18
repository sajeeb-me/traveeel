import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupImage from '../../images/signup.jpg';
import SocialMidea from '../SocialMidea/SocialMidea';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Signup = () => {
    const navigate = useNavigate();

    const [fName, setfName] = useState({ value: "", error: "" });
    const [lName, setlName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const [confirmPass, setConfirmPass] = useState({ value: "", error: "" });
    const [agree, setAgree] = useState(false)

    const handlefName = inputValue => {
        if (inputValue.length > 0) {
            setfName({ value: inputValue, error: "" })
        } else {
            setfName({ value: "", error: "Please provide First Name" })
        }
    }
    const handlelName = inputValue => {
        if (inputValue.length > 0) {
            setlName({ value: inputValue, error: "" })
        } else {
            setlName({ value: "", error: "Please provide Last Name" })
        }
    }
    const handleEmail = inputValue => {
        if (/\S+@\S+\.\S+/.test(inputValue)) {
            setEmail({ value: inputValue, error: "" })
        } else {
            setEmail({ value: "", error: "Please provide a valid email address" })
        }
    }
    const handlePass = inputValue => {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue)) {
            setPass({ value: inputValue, error: "" })
        } else {
            setPass({ value: "", error: "Password must contain minimum eight characters, at least one letter and one number" })
        }
    }
    const handleConfirmPass = inputValue => {
        if (inputValue === pass.value) {
            setConfirmPass({ value: inputValue, error: "" })
        } else {
            setConfirmPass({ value: "", error: "Password mismatched" })
        }
    }

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (createUser) {
        navigate('/')
    }
    if (createLoading) {
        return <Loading />
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (fName.value && lName.value && email.value && pass.value && confirmPass.value) {
            console.log(fName, lName, email, pass, confirmPass)
            if (createError) {
                switch (createError?.code) {
                    case "auth/email-already-in-use":
                        toast.error("Email Already Used!");
                        return;
                    default:
                        toast.error("Something went wrong!")
                }
            }
            else {
                createUserWithEmailAndPassword(email.value, pass.value)
            }
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
                        <h1 className='text-3xl font-semibold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full md:w-[400px] mx-auto text-left mt-8 pt-5 px-3 md:px-0'>
                            <section className='md:flex justify-between gap-5'>
                                <div>
                                    <input onBlur={(event) => handlefName(event.target.value)} className='placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="text" placeholder='First name' />
                                    {fName.error && <p className='text-xs text-red-500 -mt-3'>{fName.error}</p>}
                                </div>
                                <div>
                                    <input onBlur={(event) => handlelName(event.target.value)} className='placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="text" placeholder='Last name' />
                                    {lName.error && <p className='text-xs text-red-500 -mt-3'>{lName.error}</p>}
                                </div>
                            </section>
                            <input onBlur={(event) => handleEmail(event.target.value)} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="email" placeholder='Email' />
                            {email.error && <p className='text-xs text-red-500 -mt-3'>{email.error}</p>}

                            <input onBlur={(event) => handlePass(event.target.value)} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="password" placeholder='Password' />
                            {pass.error && <p className='text-xs text-red-500 -mt-3'>{pass.error}</p>}

                            <input onBlur={(event) => handleConfirmPass(event.target.value)} className='block placeholder:text-white pl-1 py-1 mb-4 outline-none bg-transparent border-white border-opacity-40 border-b w-full' type="password" placeholder='Confirm Password' />
                            {confirmPass.error && <p className='text-xs text-red-500 -mt-3'>{confirmPass.error}</p>}

                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={`ml-2 ${agree ? 'opacity-100' : 'opacity-50'}`} htmlFor="terms">Accept all terms and conditions.</label>

                            < input disabled={!agree} className='w-full mt-5 py-2 rounded-md font-semibold bg-white text-sky-700 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60' type="submit" value="Sign up" />
                        </form>
                        <Link to='/login'><p className='opacity-50 hover:opacity-100 my-3 duration-200 ease-in'>Already have account?</p></Link>
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

export default Signup;