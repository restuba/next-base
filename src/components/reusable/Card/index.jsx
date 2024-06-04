import React from 'react';

import getNickName from '@helpers/parser/getNickName';
import Image from 'next/image';

// add props for dynamic card data
const Card = ({ title, imageURL, imageAlt }) => {
  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-md border border-white outline-none transition-all duration-500 hover:z-10 hover:border-primary hover:shadow-card-hover hover:outline-4 hover:outline-offset-0 hover:outline-primary/25">
      <div className="relative aspect-video">
        <Image src={imageURL} alt={imageAlt} fill />
      </div>
      <div className="flex flex-row items-center gap-x-2 px-2 py-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
          {getNickName(title)}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Card;
