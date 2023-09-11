import React from "react";

const Rectangle = ({
  width,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  customText,
  customHoverText,
  customImage,
  customLink
}) => {
  const dynamicWidth = isHovered ? width + 35 : width;

  const style = {
    width: `calc(${dynamicWidth}% - 35px)`,
    backgroundImage: customImage ? `url(${customImage})` : "none",
    cursor: customLink ? "pointer" : "default"
  };

  const handleClick = () => {
    if (customLink) {
      window.location.href = customLink;
    }
  };

  return (
    <div
      className="transition-all relative origin-center h-full rounded-xl w-full mx-10 my-10"
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex text-white px-8 py-8 text-xl font-semibold justify-center items-center flex-col">
        {customText && (
          <div className="md:text-3xl text-5xl text-center bg-gray-500 bg-opacity-10 rounded-xl">
            {customText}
          </div>
        )}
        {isHovered && customHoverText && (
          <div className="text-center opacity-90 bg-gray-500 bg-opacity-10 rounded-xl">{customHoverText}</div>
        )}
      </div>
    </div>
  );
};

export default Rectangle;
