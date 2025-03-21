import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center pt-8">
                <div className="w-[95%] md:w-[80%] flex grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Q5Wf14jf2zA"><img src="/miniatures/minia_8.jpg" alt="demo"></img></a>
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/415058937"><img src="/miniatures/minia_2.jpg" alt="blue skies"></img></a>
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/836199983"><img src="/miniatures/minia_3.jpg" alt="behind the scenes Euphoria"></img></a>
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/435094086"><img src="/miniatures/minia_4.jpg" alt="La Réunion"></img></a>
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/435287317"><img src="/miniatures/minia_5.jpg" alt="Our mission"></img></a>
                    <a className="xl:hover:opacity-[60%] xl:duration-200" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=kktcF5dUcXA"><img src="/miniatures/minia_7.jpg" alt="THE BEAUTY OF TIME"></img></a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
