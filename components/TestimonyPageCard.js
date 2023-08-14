"use client";
import React, { useState } from "react";

const TestimonyPageCard = ({ title, name, comment, image, alttext }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" w-full flex">
      <div
        className="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img className="w-[50vw] md:w-[25vw] h-[65vh] rounded-md" src={image} alt={alttext} />
        {isHovered && (
          <div className="absolute bottom-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-72 w-full rounded-md p-3">
            <div className="flex flex-col justify-end h-full">
              <p className="text-4xl text-white font-extrabold">”</p>
              <p className="text-center text-white text-lg font-semibold italic -mt-8">
                {comment}
              </p>
              <p className="text-4xl text-white font-extrabold text-right -mt-1">
                ”
              </p>
              <div className="text-end my-4 mx-4">
                <p className="text-sm font-normal text-white">{name}</p>
                <p className="text-xs font-thin italic text-pac-orange">
                  {title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonyPageCard;
