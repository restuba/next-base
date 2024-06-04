/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import usePagination from '@hooks/components/Pagination/usePagination';
import Image from 'next/image';

const Pagination = ({ totalData = 0, currentPage = 0, onChange, pageSize = 10 }) => {
  const separator = '...';
  const siblingCount = 1;
  const { paginationRange, lastPage, onPrevious, onNext } = usePagination({
    currentPage,
    totalData,
    siblingCount,
    pageSize,
    separator,
    onChange
  });

  return (
    <div className="flex flex-row flex-wrap items-center justify-start gap-8">
      <div className="flex flex-wrap items-center gap-x-2">
        <button
          aria-hidden
          type="button"
          disabled={currentPage === 1}
          onClick={onPrevious}
          className="group flex h-9 min-w-[36px] items-center justify-center rounded-full opacity-100 outline-none outline-4 brightness-125 transition-all duration-500 active:brightness-125 active:enabled:outline-primary/25 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Image src="/assets/icons/chevron-right-icon.svg" alt="" width={24} height={24} className="rotate-180" />
        </button>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === separator) {
            return (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index.toString()}
                className="flex h-9 min-w-[36px] cursor-pointer items-center justify-center rounded-lg"
              >
                &#8230;
              </span>
            );
          }
          return (
            <button
              key={index.toString()}
              aria-hidden
              type="button"
              aria-selected={pageNumber === currentPage}
              className="flex h-9 min-w-[36px] cursor-pointer items-center justify-center rounded-full outline-none outline-4 outline-offset-0 transition-all duration-200 active:enabled:outline-primary/25 aria-selected:bg-primary aria-selected:text-white"
              onClick={() => onChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          aria-hidden
          type="button"
          disabled={currentPage === lastPage}
          onClick={onNext}
          className="group flex h-9 min-w-[36px] cursor-pointer items-center justify-center rounded-full opacity-100 outline-none outline-4 outline-offset-0 duration-500 active:enabled:outline-primary/25 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Image src="/assets/icons/chevron-right-icon.svg" alt="" width={24} height={24} className="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
