import React from 'react';

import Image from 'next/image';

// add props for state (variable) and setState (function)
const SearchBar = ({ keyword, onChangeKeyword, onSearch }) => {
  return (
    <div className="relative flex items-center justify-center">
      <input
        className="h-[60px] flex-1 rounded-none border border-black px-4"
        onChange={onChangeKeyword}
        value={keyword}
        placeholder="Search photo"
      />
      <button aria-hidden type="button" className="btn btn-primary h-[60px] rounded-none" onClick={onSearch}>
        <Image src="/assets/icons/loop-icon.svg" alt="" height={16} width={16} className="" />
      </button>
    </div>
  );
};

export default SearchBar;
