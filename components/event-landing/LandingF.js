"use client"
import React, { useState } from 'react';
import Rectangle from './Rectangle';

const LandingF = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const rectangles = [
    {
      id: 0,
      width: 125,
      text: 'Conventions',
      hoverText: 'Description for Conventions',
      image: 'https://picsum.photos/2421/1650',
      link: '/trainings-&-seminars/conventions'
    },
    {
      id: 1,
      width: 125,
      text: 'Seminars',
      hoverText: 'Description for Seminars',

      image: 'https://picsum.photos/2300/1664',
      link: '/trainings-&-seminars/seminars'
    },
    {
      id: 2,
      width: 125,
      text: 'Workshops',
      hoverText: 'Description for Workshops',
      image: 'https://picsum.photos/2400/1600',
      link: '/trainings-&-seminars/workshops'
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="flex flex-row h-[100%] items-center justify-center">
      {rectangles.map((rectangle) => (
        <Rectangle
          key={rectangle.id}
          width={rectangle.width}
          isHovered={hoveredIndex === rectangle.id}
          onMouseEnter={() => handleMouseEnter(rectangle.id)}
          onMouseLeave={handleMouseLeave}
          customText={rectangle.text}
          customHoverText={rectangle.hoverText}
          customImage={rectangle.image}
          customLink={rectangle.link}
        />
      ))}
    </div>
  );
};

export default LandingF;
