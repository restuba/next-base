import React from 'react';

const Pagination = ({ totalData, limit, currentPage, onChange }) => {
  const totalPage = Math.ceil(totalData / limit);

  const onPrevious = () => {
    onChange(currentPage - 1);
  };

  const onNext = () => {
    onChange(currentPage + 1);
  };
  return (
    <div className="flex items-center justify-center gap-x-5 border border-black py-5">
      <button type="button" onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <div>Total Page: {totalPage || 0}</div>
      <div>Current Page: {currentPage || 0}</div>
      <button type="button" onClick={onNext} disabled={currentPage === totalPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
