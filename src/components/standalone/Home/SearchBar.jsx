import React from 'react';

import Image from 'next/image';

const SearchBar = ({ keyword, onChangeKeyword, onSearch }) => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Image src="/assets/icons/google-g-icon.svg" fill alt="" style={{ objectFit: 'contain', scale: '0.7' }} />
      <div className="flex w-full items-center justify-center">
        <div className="relative grid w-full max-w-[820px] rounded-full">
          <Image
            src="/assets/icons/google-icon.svg"
            alt=""
            height={60}
            width={140}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 border-r px-8 tablet:block"
          />
          <input
            className="input-text h-[80px] rounded-full pl-[32px] pr-[92px] tablet:pl-[164px]"
            placeholder="Search photo"
            value={keyword}
            onChange={onChangeKeyword}
          />
          <button
            aria-hidden
            type="button"
            className="btn btn-primary absolute right-4 top-1/2 flex size-[60px] -translate-y-1/2 items-center justify-center rounded-full border-r !p-0"
            onClick={onSearch}
            disabled={!keyword?.trim()}
          >
            <Image src="/assets/icons/loop-icon.svg" alt="" height={16} width={16} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
