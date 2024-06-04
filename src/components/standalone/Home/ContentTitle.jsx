import React from 'react';

const ContentTitle = ({ title }) => {
  return (
    <h2 className="text-xl tablet:text-2xl laptop:text-3xl">
      Search result: &#8220;<span className="font-semibold text-primary">{title}</span>&#8220;
    </h2>
  );
};

export default ContentTitle;
