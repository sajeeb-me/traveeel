import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const params = useParams();
    return (
        <div className='min-h-[75vh] flex items-center justify-center'>
            <section>
                <h1 className='text-4xl font-semibold mb-5'>Your selected <span className='text-sky-700'>Package no: {params.id}</span> is available now.</h1>
                <button
                    type="button"
                    className="px-8 py-3 mb-1 bg-sky-700 text-white leading-tight rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                    Proceed to checkout
                </button>
            </section>
        </div>
    );
};

export default Checkout;