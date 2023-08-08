import React from 'react';

const Rectangle = ({ width, isHovered, onMouseEnter, onMouseLeave, customText, customHoverText, customImage }) => {
  const dynamicWidth = isHovered ? width + 5 : width;

  const style = {
    width: `calc(${dynamicWidth}% - 10px)`,
    backgroundImage: customImage ? `url(${customImage})` : 'none',
  };

  return (
    <div
      className="transition-all bg-blue-500 h-[30rem] rounded-2xl relative"
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered && customHoverText && (
        <div className="absolute inset-0 flex items-end text-white px-8 py-8 text-xl font-semibold opacity-75">
          {customHoverText}
        </div>
      )}
      {customText && (
        <div className="absolute inset-0 flex text-3xl items-end font-bold px-8 py-8 text-white hover:py-16 drop-shadow-xl">
          {customText}
        </div>
      )}
    </div>
  );
};

export default Rectangle;
