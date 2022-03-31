import React from "react";
import { useSelector } from "react-redux";

const Model = () => {
  //redux state
  const { open, title, body } = useSelector((state) => state.model);
  return (
    <div className={`${open ? "flex" : "hidden"} absolute top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-60 backdrop-blur-md justify-center items-center`}>
      <div className="w-5/6 sm:w-96 p-4 rounded-md text-white bg-white bg-opacity-20 backdrop-blur-sm">
        <h1>{"Action Success!"}</h1>
        <hr className="my-2" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            doloribus animi perferendis voluptatem praesentium repellendus
            magnam in enim dolore vel assumenda. Fugiat tenetur eius eligendi
            pariatur nesciunt ducimus molestiae fuga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Model;
