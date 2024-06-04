import React from 'react';

import Card from '@components/reusable/Card';

const ContentList = () => {
  const list = [
    { id: 'a', label: 'Component Card A' },
    { id: 'b', label: 'Component Card B' },
    { id: 'c', label: 'Component Card C' },
    { id: 'd', label: 'Component Card D' },
    { id: 'e', label: 'Component Card E' },
    { id: 'f', label: 'Component Card F' },
    { id: 'g', label: 'Component Card G' },
    { id: 'h', label: 'Component Card H' }
  ];
  return (
    <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 laptopL:grid-cols-4">
      {/* create reusable card component and render here */}
      {list.map(item => {
        return <Card key={item.id} title={item.label} />;
      })}
    </div>
  );
};

export default ContentList;
