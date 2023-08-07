import React, { useState } from 'react';

const SquareCard = ({ src, alt, title, text }) => {
  const [showBack, setShowBack] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (!showBack) {
      setShowBack(true);
    }
  };

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setShowBack(false);
  };

  return (
    <div
      className={`w-44 h-44 lg:w-48 lg:h-48 rounded-md p-4 cursor-pointer relative ${
        showBack ? 'bg-[#043a72]' : 'bg-[#272727]'
      } ${hovered && !showBack ? 'shadow-[#0357b3] shadow-md' : 'shadow-[#ffffff]'}`}
      onClick={() => {
        if (!showBack) {
          handleClick();
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showBack ? (
        <div className="flex flex-col items-center justify-center">
          <div className={`absolute top-0 left-0 p-2 cursor-pointer arrow-div ${showBack ? 'pointer-events-auto' : 'pointer-events-none'}`} onClick={handleArrowClick}>
            <img className='w-8 h-8' src="/icons/mingcute/arrow.svg" alt="Arrow"/>
          </div>
          <img src={src} alt={alt} className="w-8 h-8 mt-2 lg:mt-8" />
          <p className="text-sm font-bold text-base mt-4">{text}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[95%]">
          <img src={src} alt={alt} className="w-8 h-8 mb-2" />
          <p className="text-lg font-semibold">{title}</p>
        </div>
      )}
    </div>
  );
};

export default SquareCard;
