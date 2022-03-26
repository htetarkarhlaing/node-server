import React from "react";
import { Link } from "react-router-dom";

// icon 
import { BellIcon,SearchIcon,ChatIcon } from "@heroicons/react/outline" ;

const Home = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-violet-700 to-gray-600">
      {/* go to <Link to="/about">About</Link> page */}

      <div className="fixed top-0 left-0 z-10 h-16 w-full bg-gray-600 flex justify-between items-center px-10 bg-opacity-80">
        <div className="flex">
          <ChatIcon className="w-6 h-6 text-gray-100 mx-1"/>
          <h1 className="text-gray-100 text-lg">Messaging</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="outline-none p-1 px-2 placeholder:text-gray-700 placeholder:font-semibold placeholder:text-sm text-sm rounded-sm bg-gray-100"/>
            <SearchIcon className="w-6 h-6 text-gray-700 mx-3 absolute top-0.5 right-0"/>
          </div>
          <div className="relative">
            <BellIcon className="w-6 h-6 text-gray-100 mx-3"/>
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-2"></div>
          </div> 
          <img src="./rabbit.jpg" alt=""  className="w-10 h-10 rounded-full"/>
        </div>
      </div>

      <div className="h-screen grid grid-cols-12 gap-4 p-20 mx-30">
        <div className="col-span-4">
          <div className="flex justify-between">
            <h1 className="font-semibold text-gray-100">Chats</h1>
            <p className="text-gray-200 text-lg">+</p>
          </div>
          <div className="flex mt-3">
            <button className="text-gray-300 bg-white bg-opacity-20 p-0.5 px-2 rounded-md">Open</button>
            <button className="text-gray-300 bg-white bg-opacity-20 p-0.5 px-2 rounded-md mx-2">Done</button>
            <button className="text-gray-300 p-0.5 px-2 border-dotted border border-gray-100 border-opacity-30 rounded-md">Unread</button>
          </div>
        </div>
        <div className="h-full w-0.5 bg-gray-50 opacity-20">

        </div>

        <div className="">

        </div>
      </div>



      
    </div>
  );
};

export default Home;
