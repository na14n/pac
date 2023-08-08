"use client"
import React, { useState } from 'react';
import Rectangle from './Rectangle';

const LandingF = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const rectangles = [
    { id: 0, width: 28, text: 'Conventions', hoverText: 'Description for Conventions', image: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/364811185_2204485523070355_3301340321244296574_n.png?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG-wR7ul5fdZs9LA8vKSwXWQmBDdxLDRa9CYEN3EsNFr9Ax4osru7uzX15C92hnu8R5i-AZgJoeY2ax-hQg2fYY&_nc_ohc=uYWl5FNZi3gAX-K0oiM&_nc_ht=scontent.fmnl3-1.fna&oh=03_AdTVgstNyI_Dt8sJjxIqQab2Lx4HQYn82mwMZDZb5MB-lw&oe=64F90633' },
    { id: 1, width: 28, text: 'Workshops', hoverText: 'Description for Workshops', image: 'https://fokussprachen.com/wp-content/uploads/2020/06/Workshop.jpg' },
    { id: 2, width: 28, text: 'Seminars', hoverText: 'Description for Seminars', image: 'https://www.millertanner.com/wp-content/uploads/2022/05/shutterstock_758264113.jpg' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="flex h-screen justify-center items-center space-x-4">
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
        />
      ))}
    </div>
  );
};

export default LandingF;
