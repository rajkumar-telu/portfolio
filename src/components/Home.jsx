import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          RajKumar Telukuntla
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a recent Master’s graduate from the University of Cincinnati with a knack for converting coffee into clean, functional code I'm always looking for new opportunities to take my career next level.
          From building user-friendly interfaces to optimizing backend systems, I enjoy turning ideas into practical solutions that make a difference.
          I’m passionate about software development and can’t wait to roll up my sleeves and get to work on meaningful projects.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
