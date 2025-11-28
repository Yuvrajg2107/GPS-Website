import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import AboutNumbers from "./AboutNumbers";
const landingImages = [
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
];

const lifeAtGPSImages = [
    "https://images.unsplash.com/photo-1581090700227-4c5cf45d1c1c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
];

const HomePage = () => {
    useEffect(() => {
        // Landing slider
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            perView: 1,
            gap: 0,
            autoplay: 3000,
            hoverpause: true,
            animationDuration: 800,
        }).mount();

        // Life-at-GPS slider (no arrows, no bullets)
        new Glide(".glide-life", {
            type: "carousel",
            startAt: 0,
            perView: 1,
            gap: 0,
            autoplay: 2500,
            hoverpause: true,
            animationDuration: 800,
        }).mount();
    }, []);

    return (
        <>
            {/* Landing Slider */}
            <div className="landing-container w-full h-[540px] overflow-hidden relative">
                <div className="glide h-full">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides h-full">
                            {landingImages.map((img, index) => (
                                <li key={index} className="glide__slide h-full w-full">
                                    <img
                                        src={img}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Arrows */}
                    <div
                        className="glide__arrows absolute top-1/2 left-0 right-0 flex justify-between px-4"
                        data-glide-el="controls"
                    >
                        <button
                            className="glide__arrow glide__arrow--left bg-white rounded-full p-2 shadow"
                            data-glide-dir="<"
                        >
                            ◀
                        </button>
                        <button
                            className="glide__arrow glide__arrow--right bg-white rounded-full p-2 shadow"
                            data-glide-dir=">"
                        >
                            ▶
                        </button>
                    </div>

                    {/* Bullets */}
                    <div
                        className="glide__bullets absolute bottom-4 m-auto transform flex gap-2"
                        data-glide-el="controls[nav]"
                    >
                        {landingImages.map((_, i) => (
                            <button
                                key={i}
                                className="glide__bullet w-3 h-3 rounded-full bg-white opacity-100 hover:opacity-100"
                                data-glide-dir={`=${i}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="elementor-space"></div>
            <div className="welcome-page w-full px-18 py-18">
                <div className="welcome-content max-w-6xl mx-auto h-full flex justify-between items-center gap-y-1">
                    <div className="left-content w-1/2 h-full p-2">
                        <h1 className="text-3xl">Welcome to Government Polytechnic Solapur</h1>
                        <br />
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi accusamus impedit facere deserunt repellendus temporibus nostrum debitis harum neque reiciendis, natus itaque!
                        </p>
                        <br />
                        <p className="text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt tempore dicta deleniti eveniet quos dolor placeat temporibus voluptates. Rerum quasi dolore quis doloribus quidem accusantium provident dolorem autem placeat, accusamus maiores, similique laboriosam, harum tempora a blanditiis sequi repudiandae porro error ea.
                        </p>
                        <br />
                        <button className="px-8 py-4 bg-rose-600 text-white text-sm cursor-pointer hover:bg-gray-500 transition-colors duration-300">
                            Read More
                        </button>
                    </div>
                    <div className="right-content w-1/2 bg-yellow-400 h-full rounded-md">
                        <img
                            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover rounded-md"
                            alt="Right side"
                        />
                    </div>
                </div>
            </div>

            {/* Life-at-GPS Slider */}
            <div className="life-at-gps-section w-full py-18 px-18 max-h-8xl">
                <div className="glide glide-life max-w-6xl mx-auto h-[400px] overflow-hidden rounded-md">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides h-full">
                            {lifeAtGPSImages.map((img, index) => (
                                <li key={index} className="glide__slide h-full w-full">
                                    <img
                                        src={img}
                                        alt={`Life at GPS ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div
                id="about-us"
                className="w-full h-[460px] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')`,
                    backgroundAttachment: "fixed", // <-- parallax effect
                }}
            >
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                    <h2 id="title1" className="text-6xl mb-2">We Are GPS</h2>
                    <h3 id="title2" className="text-2xl mb-4">We Are Different</h3>
                    <img
                        id="title3"
                        src="https://gpsolapur.ac.in/images/waves.png"
                        alt="Decorative waves"
                        className="mt-4"
                    />
                    <AboutNumbers />
                </div>
            </div>

            <div className="principle-information w-full py-18 px-6">
                <div className="principle-section max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-lg bg-white shadow-[4px_4px_15px_0px_#616161]">

                    {/* Image Section */}
                    <div className="image-section w-full md:w-2/6 h-full rounded-lg overflow-hidden flex flex-col justify-center m-auto">
                        <img
                            src="https://gpsolapur.ac.in/images/principal.jpg?486"
                            alt="Principal"
                            className="w-full object-cover"
                        />
                        <div className="text-center text-black">
                            <br />
                            <p className="font-bold">Dr. S. P. Narote</p>
                            <p>Co-ordinator GPS</p>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="information-section w-full md:w-4/6 p-4 md:p-6 rounded-lg bg-yellow-50">
                        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
                            From The Principal's Desk
                        </h2>

                        <p className="text-gray-800 text-justify leading-relaxed mb-4">
                            Dear All, <br /><br />
                            It’s my pleasure to welcome you to the institutional website of Government Polytechnic, Solapur.
                            This institute was established in 1956 and is one of the oldest Polytechnics in Maharashtra, with a vision of contributing to society through excellence in Technical Education.
                            Government Polytechnic, Solapur has qualified, passionate, and committed faculty and staff members to ensure the all-round development of the students.
                            Being a technical educational institute, our goal is to support all students academically and socially by imparting knowledge with skills so as to establish high aims and great dreams in their life.
                            The institute is focused on building a lifetime learning attitude and making students capable of succeeding in the complex competitive world.
                            Our alumni excel nationally and internationally, bringing pride to our institution.
                            I expect cooperation from all stakeholders and invite you to join this journey to build a better future.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full py-18 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-2">Why Choose GPS</h2>
                    <div className="w-24 h-1 bg-rose-600 mx-auto mb-4"></div>
                    <p className="text-gray-700 mb-12">
                        Government Polytechnic, Solapur, focuses on providing quality technical education with practical exposure and student-centered learning.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <img
                                src="https://vjti.ac.in/wp-content/uploads/2021/02/icon-01.svg"
                                alt="Affordability"
                                className="w-20 h-20 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Affordability</h3>
                            <p className="text-gray-600 text-center">
                                Our financial aid program makes GPS affordable for every family.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <img
                                src="https://vjti.ac.in/wp-content/uploads/2021/02/icon-02.svg"
                                alt="Academics"
                                className="w-20 h-20 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Academics</h3>
                            <p className="text-gray-600 text-center">
                                Our courses are taught by experienced faculty with practical exposure.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <img
                                src="https://vjti.ac.in/wp-content/uploads/2021/02/icon-03.svg"
                                alt="Student Life"
                                className="w-20 h-20 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Inspiring Student Life</h3>
                            <p className="text-gray-600 text-center">
                                Our campus life facilitates learning with peers and professors from diverse backgrounds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;
