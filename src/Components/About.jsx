import React from 'react'
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/profile_img.jpg";

const About = () => {
  return (
    <section id="aboutus">
    <div >
      <h2 className="text-3xl  sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About us
      </h2>
      <div className="flex flex-wrap justify-center items-center py-10">
        <div className="p-5 w-full md:w-1/3">
          <img
            src={codeImg}
            alt="Coding"
            className="w-full h-72 md:h-96 lg:h-[500px] object-cover rounded-2xl"
          />
        </div>
        <div className="pt-12 w-full md:w-1/3">
          <div className="flex mb-12 p-5">
            <div className="text-green-400 mx-6 bg-gray-700 h-10 w-10 p-2 flex justify-center items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-white font-bold text-xl">Tushar Verma</h5>
              <p className="text-md text-gray-300">Experience in Record to Report with a demonstrated history of working in the Hotel Industry, Health Care, cargo and management consulting industry. 
              Skilled in Accounting, Leadership, Commerce, Auditing, and Financial Analysis.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
  )
}

export default About