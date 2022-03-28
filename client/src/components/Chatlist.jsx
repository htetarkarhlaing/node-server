import React from "react";

const ChatList = ({name, msg,time}) => {
    // console.log(props);
    return (
            
            <div className="flex justify-between items-center w-full p-3 border-b border-gray-300 border-opacity-60 hover:bg-gray-500 hover:bg-opacity-40 hover:rounded-lg cursor-pointer">
                <div className="flex items-center">
                <img src="./rabbit.jpg" alt="chat1" className="w-10 h-10 rounded-full" />
                <div className="mx-5">
                    <p className="text-gray-100 text-sm my-1">{name}</p>
                    <p className="text-indigo-100 text-xs">{msg}</p>
                </div>
                </div>
                <p className="text-gray-100 text-xs">{time}</p>
            </div>

    );
};

export default ChatList;