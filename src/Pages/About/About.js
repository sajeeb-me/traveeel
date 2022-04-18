import React from 'react';
import MyImg from '../../images/about.jpg'

const About = () => {
    return (
        <div className='min-h-[90vh] px-5 md:px-[120px] flex justify-center items-center'>
            <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='flex justify-end'>
                    <img className='rounded-xl' src={MyImg} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-4xl font-semibold mb-5'>Sajeeb Das Shuvo</h1>
                    <p><span className='font-semibold'>My Goal: </span>I am a Student now. Within next 8 months before this  2022 end I wat to become a Junior Full-Stack Developer.</p>
                    <p>Doing Complete Web Development Course With Jhankar Mahbub course by Programming Hero now a days and after this Course I'll do more problem solving and will learn Data Structure and Data algorithm for developing my self.</p>
                    <p className='mt-4'>I always want to work with an International Organization and for that reason I'm building my Profile from now. Getting myself ready for facing Interview Question. </p>
                </div>
            </section>
        </div>
    );
};

export default About;