import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const SquareCard = ({ src, alt, title, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
            className={`w-44 h-44 lg:w-48 lg:h-48 rounded-md p-4 cursor-pointer relative bg-[#272727] ${
                hovered ? 'shadow-[#0357b3] shadow-md' : 'shadow-[#ffffff]'
            }`}
            onClick={handleCardClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
          <div className="flex flex-col items-center justify-center w-full h-[95%]">
            <img src={src} alt={alt} className="w-8 h-8 mb-2" />
            <p className="text-lg font-semibold">{title}</p>
          </div>
        </div>

        <div className="w-44 h-44 lg:w-48 lg:h-48 rounded-md p-4 cursor-pointer relative bg-[#043a72]">
          <div className="flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 p-2 cursor-pointer arrow-div pointer-events-auto" onClick={handleArrowClick}>
              <img className="w-8 h-8" src="/icons/mingcute/arrow.svg" alt="Arrow" />
            </div>
            <img src={src} alt={alt} className="w-8 h-8 mt-2 lg:mt-8" />
            <p className="text-xs font-bold text-base md:text-sm mt-4">{text}</p>
          </div>
        </div>
      </ReactCardFlip>
  );
};

export default SquareCard;
