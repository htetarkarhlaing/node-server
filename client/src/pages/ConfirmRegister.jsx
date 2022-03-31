import { CheckCircleIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const ConfirmRegister = () => {
  return <div
  className="h-screen w-full flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/neon-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  >
    <div className="h-auto w-96 backdrop-blur-sm border border-white border-opacity-10 shadow-md bg-white bg-opacity-10 flex flex-col items-center p-10 rounded-lg">
      <div className="flex flex-col items-center justify-between gap-2">
        <CheckCircleIcon className="text-green-400 w-10 h-10"/>
        <p className="text-green-400 text-xl">Success</p>
        <p className="text-gray-200 text-center text-sm">That's it! Now you are ready to get started. Please click OK to continue.</p>

        <div className="text-gray-100 text-sm mt-3">
          <button className="border border-white rounded-md border-opacity-30 p-1 px-6 mr-3">OK</button>
        </div>
      </div>
    </div>
  
  
  
  </div>;
};

export default ConfirmRegister;
