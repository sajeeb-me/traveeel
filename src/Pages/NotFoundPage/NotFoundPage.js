import React from 'react';
import NotFoundImg from '../../images/404.jpg'

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center min-h-[80vh]'>
            <section>
                <img src={NotFoundImg} alt="" />
            </section>
        </div>
    );
};

export default NotFoundPage;