import React from 'react';

import Card from '@components/reusable/Card';

const ContentList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 laptopL:grid-cols-4">
      {/* create reusable card component and render here */}
      {data?.map(item => {
        return (
          <Card key={item.id} title={item?.photographer || '-'} imageURL={item?.src?.landscape} imageAlt={item?.alt} />
        );
      })}
    </div>
  );
};

export default ContentList;
