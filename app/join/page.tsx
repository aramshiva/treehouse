'use client';

import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const font = IBM_Plex_Mono({ weight: '500', subsets: ['latin'] });

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className={`h-screen w-screen ${font.className} flex`}>
      <div className="w-1/2 relative">
        <Image
          src="/bg.svg"
          alt="dots background"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className="w-1/2 bg-[#0B0A18] relative flex flex-col items-center justify-center px-8">
        <div className="w-full text-white text-6xl font-semibold mb-8">
          Sign Up
        </div>
        <div className="w-full flex justify-between mb-8">
          <button className="bg-[#007A5A] text-white py-4 px-12 text-xl rounded-md focus:outline-none transform transition-all duration-300 hover:bg-[#005a42] hover:scale-105 hover:shadow-lg">
            Login with Slack
          </button>
          <button className="bg-[#333] text-white py-4 px-12 text-xl rounded-md focus:outline-none transform transition-all duration-300 hover:bg-[#444] hover:scale-105 hover:shadow-lg">
            Login with Github
          </button>
        </div>
        <div className="w-full flex items-center mb-8">
          <div className="flex-grow h-px bg-white"></div>
          <p className="mx-4 text-white"> OR </p>
          <div className="flex-grow h-px bg-white"></div>
        </div>
        <form className="w-full max-w-lg space-y-4">
          <div className="flex items-center space-x-2">
            <p className="text-white text-xl">{'>'}</p>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-4 text-white bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-xl">{'>'}</p>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-4 text-white bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-xl">{'>'}</p>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 text-white bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-xl">{'>'}</p>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)} 
              className="w-full p-4 text-white bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholderText="Birthdate"
              calendarClassName="react-datepicker__calendar"
              wrapperClassName="w-full"
              popperPlacement="bottom"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 text-lg rounded-md hover:bg-green-400 focus:outline-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="absolute left-1/2 top-0 h-full border-l-4 border-green-800"></div>
    </div>
  );
}
