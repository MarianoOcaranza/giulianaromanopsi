import React from "react";
import Image from '../assets/mainimage.jpeg';
import Presentation from "../components/landing/Presentation";

const Landing: React.FC = ()=> {
    return (
        <>
            <div className="flex bg-purple-400 flex-col lg:flex-row md:items-center md:min-h-screen">
                <Presentation />
                <img src={Image} alt="main_image" 
                    className="w-full lg:w-1/2 md:w-3/4 object-cover max-w-full m-auto"
                />
            </div>
        </>
    )
}

export default Landing;