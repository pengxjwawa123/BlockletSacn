import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} rounded-lg w-full min-h-[128px] border-2 border-secondary p-4 flex bg-[#f3f1f1] flex-col justify-center gap-y-2`}>
      {children}
    </div>
  );
};
export default Card;
