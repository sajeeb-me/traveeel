import React from 'react';

const HomeHeader = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide relative px-3 md:px-[120px] my-5" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="https://i.ibb.co/BPc3cZ5/carousel-1.jpg"
                        className="block w-full rounded-3xl"
                        alt="Wild Landscape"
                    />
                    <div className="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 className="text-4xl font-semibold">Enjoy your Best Travel with Us!</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/p4SK5GD/carousel-2.jpg"
                        className="block w-full rounded-3xl"
                        alt="Camera"
                    />
                    <div className="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 className="text-4xl font-semibold">Explore the World with Traveeel!</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/41ny8nY/carousel-3.jpg"
                        className="block w-full rounded-3xl"
                        alt="Exotic Fruits"
                    />
                    <div className="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 className="text-4xl font-semibold">The Best Reliable Choice for every Traveler.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;