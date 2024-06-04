import React from 'react';

const ContentTitle = ({ title }) => {
  return (
    <h2 className="flex items-center justify-center border border-black py-5">
      Search result: &#8220;<span className="font-semibold text-primary">{title}</span>&#8220;
    </h2>
  );
};

export default ContentTitle;
