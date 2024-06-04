import { useEffect, useMemo } from 'react';

const usePagination = ({ totalData, pageSize, siblingCount = 1, currentPage, separator, onChange }) => {
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalData / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, separator, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, separator, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, separator, ...middleRange, separator, lastPageIndex];
    }
    return [];
  }, [totalData, pageSize, siblingCount, currentPage, separator]);

  const lastPage = paginationRange && paginationRange.length ? paginationRange[paginationRange.length - 1] : undefined;

  const onNext = () => {
    if (Number(currentPage) < Number(lastPage)) onChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) onChange(currentPage - 1);
  };

  useEffect(() => {
    const closest = paginationRange?.reduce((prev, curr) => {
      return Math.abs(Number(curr) - currentPage) < Math.abs(Number(prev) - currentPage) ? curr : prev;
    }, 1);
    onChange(closest);
  }, [pageSize]);

  return { paginationRange, lastPage, onPrevious, onNext };
};

export default usePagination;
