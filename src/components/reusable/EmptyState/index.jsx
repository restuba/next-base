import React from 'react';

import Image from 'next/image';

const EmptyState = () => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center rounded-lg bg-gray-100">
      <Image src="/assets/images/empty-state.svg" alt="no data" height={400} width={400} />
      <p className="text-center text-base text-gray-500">
        We couldn&apos;t find anything for &#8220;<span className="font-semibold text-gray-500">query</span>
        &#8220; with your filters.
        <br />
        Try to refine your search..
      </p>
    </div>
  );
};

export default EmptyState;
