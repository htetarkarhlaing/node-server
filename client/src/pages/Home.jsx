import React from "react";
import { Link } from "react-router-dom";

// icon 
import { BellIcon,SearchIcon,ChatIcon, PhoneIcon, VideoCameraIcon, InformationCircleIcon, PhotographIcon, PaperAirplaneIcon, ViewGridIcon, CameraIcon } from "@heroicons/react/outline" ;

const Home = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-400 to-purple-400">
      {/* go to <Link to="/about">About</Link> page */}

      <div className="fixed top-0 left-0 z-10 h-14 w-full bg-gray-600 flex justify-between items-center px-10 bg-opacity-30 backdrop-blur-sm">
        <div className="flex">
          <ChatIcon className="w-6 h-6 text-gray-100 mx-1"/>
          <h1 className="text-gray-100">Messaging</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="outline-none p-1 px-2 placeholder:text-gray-200 placeholder:text-sm  text-sm text-gray-200 rounded-md bg-gray-500 bg-opacity-50"/>
            <SearchIcon className="w-5 h-5 text-gray-200 mx-3 absolute top-1 right-0"/>
          </div>
          <div className="relative">
            <BellIcon className="w-5 h-5 text-gray-100 mx-3 cursor-pointer"/>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-0 right-3"></div>
          </div> 
          <img src="./rabbit.jpg" alt=""  className="w-9 h-9 rounded-full"/>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 pt-16 px-20 mx-30">
        <div className="col-span-4">
          <div className="flex justify-between">
            <h1 className="text-gray-200">Chats</h1>
            <button className="text-gray-200 text-lg">+</button>
          </div>
          <div className="flex my-2">
            <button className="text-gray-200 bg-gray-500 bg-opacity-40 p-0.5 px-2 rounded-md text-sm">Open</button>
            <button className="text-gray-200 bg-gray-500 bg-opacity-40 p-0.5 px-2 rounded-md text-sm mx-2">Done</button>
            <button className="text-gray-200 p-0.5 px-2 border-dotted border border-gray-100 border-opacity-80 rounded-md text-sm">Unread</button>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">Berry</p>
                <p className="text-indigo-100 text-xs">You: 5ing!!</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">Htet Arkar</p>
                <p className="text-indigo-100 text-xs">Htet: Tat trr</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">SaSa</p>
                <p className="text-indigo-100 text-xs">You: ma htar yayyy</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">Ko Nyi</p>
                <p className="text-indigo-100 text-xs">You: Hote kae</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">Choco</p>
                <p className="text-indigo-100 text-xs">Choco: Bokdok kywayy</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>

          <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
              <div className="mx-5">
                <p className="text-gray-100 text-sm my-1">Luu Luu</p>
                <p className="text-indigo-100 text-xs">You: Banana wel kwayy ml</p>
              </div>
            </div>
            <p className="text-gray-100 text-xs">12mins</p>
          </div>
          
        </div>
        <div className="w-0.5 bg-gray-50 opacity-20 ml-8">

        </div>

        <div className=" h-auto col-span-7 rounded-lg overflow-hidden">
          <div className="p-2 py-3 bg-gray-500 flex items-center justify-between bg-opacity-50">
            <div className="flex items-center">
              <div className="relative ml-3">
                <img src="./rabbit.jpg" alt="teamchat" className="w-12 h-12 rounded-full"/>
                <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 left-9"></div>
              </div>
              <h1 className="text-gray-200 text-xl mx-3">Web Development Group</h1>
            </div>
            <div className="flex mx-3"> 
              <PhoneIcon className="w-6 h-6 text-gray-200 cursor-pointer"/>
              <VideoCameraIcon className="w-6 h-6 mx-1 text-gray-200 cursor-pointer"/>
              <InformationCircleIcon className="w-6 h-6 text-gray-200 cursor-pointer"/>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-5">
            <div className="flex items-end mb-2">
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">SaSa</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Hello</p>
              </div>
            </div>
            <div className="flex items-end justify-end mb-2">
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">You</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Hola</p>
              </div>
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
            </div>
            <div className="flex items-end mb-2">
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">Ko Nyi</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Server pw tin pyy pr own Htet ArKar</p>
              </div>
            </div>
            <div className="flex items-end mb-2">
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">Htet Arkar</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Tin pee b Ko Nyi yayy</p>
              </div>
            </div>
            <div className="flex items-end justify-end mb-2">
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">You</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Hta min srr kya ml</p>
              </div>
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
            </div>
            <div className="flex items-end mb-2">
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">SaSa</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Let's Gooooo</p>
              </div>
            </div>
            <div className="flex items-end mb-2">
              <img src="./rabbit.jpg" alt="msg1" className="w-7 h-7 rounded-full" />
              <div className="mx-2">
                <p className="text-xs mx-1 text-indigo-100">Htet Arkar</p>
                <p className="bg-gray-500 bg-opacity-50 px-2 p-1 rounded-lg text-gray-200 text-sm">Okieee</p>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-purple-500 bg-opacity-50 p-2">
            <div className="flex mr-3">
              <ViewGridIcon className="w-5 h-5 text-gray-200 cursor-pointer"/>
              <PhotographIcon className="w-5 h-5 text-gray-200 mx-1 cursor-pointer"/>
              <CameraIcon className="w-5 h-5 text-gray-200 cursor-pointer"/>
            </div>
            <input type="text" placeholder="Aa" className="p-1 px-2 w-full rounded-lg bg-gray-500 bg-opacity-50 text-sm text-gray-200 placeholder:text-gray-200 outline-none placeholder:text-sm "/>
            <PaperAirplaneIcon className="w-5 h-5 text-white mx-2 rotate-45 cursor-pointer"/>
          </div>
        </div>
      </div>



      
    </div>
  );
};

export default Home;
