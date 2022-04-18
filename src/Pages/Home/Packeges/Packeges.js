import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packeges = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className='mb-10'>
            <h1 className='text-2xl md:text-4xl  font-semibold mb-5 text-sky-700 mt-10 md:mt-0'>Our Packages</h1>
            <section className='grid grid-cols-1 md:grid-cols-3 px-5 md:px-[120px] gap-10'>
                {
                    packages.map(pack => <Package key={pack.id} pack={pack} />)
                }
            </section>
        </div>
    );
};

export default Packeges;