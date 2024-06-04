import React from 'react';

import getNickName from '@helpers/parser/getNickName';
import Image from 'next/image';

const Card = ({ imageUrl, imageAlt, title = '-', onClick = () => {}, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col overflow-hidden rounded-md border border-white ">
        <div className="relative aspect-video animate-pulse bg-gray-200" />
        <div className="flex flex-row items-center gap-x-2 px-4 py-3">
          <div className="flex size-10 min-h-10 min-w-10 animate-pulse items-center justify-center rounded-full bg-gray-200" />
          <span className="h-[24px] w-full animate-pulse  rounded-sm bg-gray-200" />
        </div>
      </div>
    );
  }
  return (
    <div
      aria-hidden
      onClick={onClick}
      className="flex cursor-pointer flex-col overflow-hidden rounded-md border border-white outline-none outline-offset-0 transition-all duration-500 hover:z-10 hover:border-primary hover:outline-4 hover:outline-primary/25  hover:enabled:brightness-125 laptop:hover:shadow-card-hover"
    >
      <div className="relative aspect-video">
        <Image src={imageUrl} alt={imageAlt} fill />
      </div>
      <div className="flex flex-row items-center gap-x-2 px-4 py-3">
        <div className="flex size-10 min-h-10 min-w-10 items-center justify-center rounded-full bg-primary text-white">
          {getNickName(title)}
        </div>
        <span className="line-clamp-2 w-full rounded-sm text-base">{title}</span>
      </div>
    </div>
  );
};

export default Card;
