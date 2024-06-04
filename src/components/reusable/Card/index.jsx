import React from 'react';

// add props for dynamic card data
const Card = ({ title }) => {
  return (
    <div className="flex h-[200px] min-h-[200px] items-center justify-center border border-black">
      <div>{title}</div>
    </div>
  );
};

export default Card;
