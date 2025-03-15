import React from 'react'
import { socialMedia } from "../Constants";


const Footer = () => {
  return (
    <div><section id="contact" className='max-w-7xl mx-auto'>
      <footer className="m-10 sm:mx-20 border-t py-10 border-neutral-700">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
            <span className="text-slate-700 font-bold bg-clip-text">
              Contact us!
            </span>
          </h1>
          <p className="mt-10 text-md text-center text-neutral-500 max-w-4xl sm:text-lg">
            Need guidance on managing your finances? Our experts are here to help with accounting, financial planning, and strategic decision-making. Get in touch today for personalized solutions!        </p>
          <a
            href="mailto:tusharverma376@gmail.com?subject=Connect%20Now&body=Hi,%20I'm%20interested%20in%20connecting%20with%20you."
            className="bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%  py-2 px-6 m-8 rounded-md sm:px-10 sm:py-3"
          >
            Connect Now
          </a>
        </div>


        <div className="flex justify-between items-center my-10 mt-24">
          <div>
            <h4>©2025 by tusharverma</h4>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-6 ">
              {socialMedia.map(({ id, Icon, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Icon size={32} className="text-white hover:text-blue-500 w-4 h-4 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section></div>
  )
}

export default Footer