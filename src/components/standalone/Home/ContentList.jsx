import React from 'react';

import Card from '@components/reusable/Card';
import { useRouter } from 'next/router';

const ContentList = ({ data, isLoading }) => {
  const router = useRouter();

  const onRedirectToDetail = id => {
    router.push(`/photo/${id}`);
  };

  return (
    <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 laptopL:grid-cols-4">
      {data.map(item => {
        return (
          <Card
            key={item?.id}
            imageUrl={item?.src?.landscape}
            imageAlt={item?.alt}
            isLoading={isLoading}
            title={item?.photographer}
            onClick={() => onRedirectToDetail(item?.id)}
          />
        );
      })}
    </div>
  );
};

export default ContentList;
