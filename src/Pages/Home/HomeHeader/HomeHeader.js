import React from 'react';

const HomeHeader = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide relative px-[120px] my-5" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="block w-full rounded-3xl"
                        alt="Wild Landscape"
                    />
                    <div class="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 class="text-4xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                        className="block w-full rounded-3xl"
                        alt="Camera"
                    />
                    <div class="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 class="text-4xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                        className="block w-full rounded-3xl"
                        alt="Exotic Fruits"
                    />
                    <div class="carousel-caption hidden md:block absolute top-52 text-center">
                        <h5 class="text-4xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;