import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Raj, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Hi! I’m Rajkumar Telukuntla, a recent Master’s graduate from the University of Cincinnati with a knack for converting coffee into clean, functional code. From building user-friendly interfaces to optimizing backend systems, I enjoy turning ideas into practical solutions that make a difference.
              I’m passionate about software development and can’t wait to roll up my sleeves and get to work on meaningful projects. Whether it’s brainstorming a cool feature or solving a challenging bug, I’m ready to jump in and make an impact.  
              When I’m not coding, you’ll find me exploring new tech, enjoying great music, or dreaming up my next side project. Let’s connect—I’d love to hear about your next big idea!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
