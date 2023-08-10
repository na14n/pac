"use client"
import React, { useState } from 'react';
import Rectangle from './Rectangle';

const LandingF = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const rectangles = [
    { id: 0, width: 120, text: 'Conventions', hoverText: 'Description for Conventions', image: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/364811185_2204485523070355_3301340321244296574_n.png?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG-wR7ul5fdZs9LA8vKSwXWQmBDdxLDRa9CYEN3EsNFr9Ax4osru7uzX15C92hnu8R5i-AZgJoeY2ax-hQg2fYY&_nc_ohc=uYWl5FNZi3gAX-K0oiM&_nc_ht=scontent.fmnl3-1.fna&oh=03_AdTVgstNyI_Dt8sJjxIqQab2Lx4HQYn82mwMZDZb5MB-lw&oe=64F90633', link: '/trainings-&-seminars/conventions' },

    { id: 1, width: 120, text: 'Workshops', hoverText: 'Description for Workshops', image: 'https://fokussprachen.com/wp-content/uploads/2020/06/Workshop.jpg', link: '/trainings-&-seminars/seminars' },
    
    { id: 2, width: 120, text: 'Seminars', hoverText: 'Description for Seminars', image: 'https://www.millertanner.com/wp-content/uploads/2022/05/shutterstock_758264113.jpg', link: '/trainings-&-seminars/workshops' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center">
      {rectangles.map((rectangle) => (
        <Rectangle
          key={rectangle.id} // Make sure to provide a unique key
          width={rectangle.width}
          isHovered={hoveredIndex === rectangle.id}
          onMouseEnter={() => handleMouseEnter(rectangle.id)}
          onMouseLeave={handleMouseLeave}
          customText={rectangle.text}
          customHoverText={rectangle.hoverText}
          customImage={rectangle.image}
          customLink={rectangle.link} // Pass the custom link here
        />
      ))}
    </div>
  );
};

export default LandingF;
