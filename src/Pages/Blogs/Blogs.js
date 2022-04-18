import React from 'react';

const Blogs = () => {
    return (
        <div className='py-10 px-10 md:px-[120px]'>
            <h1 className='text-4xl font-semibold mb-8'>Our Blogs</h1>
            <section className='text-left'>
                <ol className="border-l-2 border-sky-700">
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2">Difference between Authentication and Authorization?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>4 February, 2022</p>
                            <p className="text-gray-700 mt-2 mb-4">Authentication and Authorization are used to make a website or organization protected and give specific access to specific users.
                                Actually Authentication and Authorization are different process. Authentication verify someone who someone is on the other hand Authorization verify that which specific data someone can access. Generally Authentication works through email, passwords, pins, security information and other information provided by user. And, Authorization works throw the function what is set by organization.</p>
                            <p className="text-gray-700">In a sentence, Authentication is the first step to  verify the user and Authorization gives the user to access specific data based on Authentication.</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2"> Why are you using firebase? What other options do you have to implement authentication?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>12 January, 2022</p>
                            <p className="text-gray-700 mt-2 mb-4">Firebase is using to creating mobile and web applications which is developed by Google. The main reason for using Firebase is, it's time-saving and less-technical to writing full backend code to build a dynamic App. From all of the features I love Authentication section. By Google Firebase Authentication I can make Sign In and Sign up function so easily.</p>
                            <div>
                                <p className="text-gray-700">Other alternative options of Firebase to implement authentication: </p>
                                <ul>
                                    <li><span className='font-semibold'>Okta: </span> Okta is the world's no 1 identity platform.</li>
                                    <li><span className='font-semibold'>Parse: </span> Parse also offer a spreadsheet-like database, dashboard, push notifications, APIs, etc.</li>
                                    <li><span className='font-semibold'>NativeScript: </span> In NativeScript you can create native mobile apps with one codebase using CSS and JS libraries that you alredy have.</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-sky-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-sky-700 font-semibold text-xl -mt-2">What other services does Firebase provide other than Authentication?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">
                            <p className='text-sm'>27 December, 2021</p>
                            <p className="text-gray-700 mt-2">For Authentication I always find Google Firebase is awesome and user friendly. But, there are many other services except Authentication in Firebase. They are:</p>
                            <ul className='font-semibold'>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                                <li>Romote Config and etc</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default Blogs;