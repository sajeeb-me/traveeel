import React from 'react';
import LoadingImg from '../../images/loading.gif'

const Loading = () => {
    return (
        <div className='min-h-[75vh] flex justify-center'>
            <section>
                <img src={LoadingImg} alt="" />
            </section>
        </div>
    );
};

export default Loading;