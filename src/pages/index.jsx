import { useCallback, useEffect, useState, useRef } from 'react';

import EmptyState from '@components/reusable/EmptyState';
import Pagination from '@components/reusable/Pagination';
import ContentList from '@components/standalone/Home/ContentList';
import ContentTitle from '@components/standalone/Home/ContentTitle';
import SearchBar from '@components/standalone/Home/SearchBar';
import getListPhoto from '@services/photos/getListPhoto';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const limit = 12;
  const contentContainerRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState('');

  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  // const onSearch = async () => {
  //   try {
  //     setIsLoading(true);
  //     setQuery(keyword);
  //     const res = await getListPhoto({ query: keyword, limit, page: currentPage });
  //     setData(res?.photos || []);
  //     setTotalData(res?.total_results || 0);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSearch = () => {
    setQuery(keyword);
  };

  const onGetListPhoto = useCallback(async () => {
    if (query) {
      try {
        setIsLoading(true);
        const res = await getListPhoto({ query, limit, page: currentPage });
        setData(res?.photos || []);
        setTotalData(res?.total_results || 0);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        if (contentContainerRef.current) {
          contentContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [currentPage, limit, query]);

  useEffect(() => {
    onGetListPhoto();
  }, [onGetListPhoto]);

  return (
    <main className={`flex w-full flex-col ${poppins.className}`}>
      <div className="flex flex-col px-4 tablet:px-10">
        <div className="mx-auto grid w-full max-w-screen-laptopM">
          <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} onSearch={onSearch} />
        </div>
        <div
          ref={contentContainerRef}
          aria-hidden={!query}
          className="mx-auto flex w-full max-w-screen-desktopL flex-col gap-y-10 py-32 aria-hidden:hidden"
        >
          <ContentTitle title={query} />
          <div className="flex min-h-[800px] flex-col ">
            {totalData === 0 && !isLoading && <EmptyState query={query} />}
            {(totalData > 0 || isLoading) && <ContentList data={data} isLoading={isLoading} />}
          </div>
          {(totalData > 0 || isLoading) && (
            <div className="flex items-center justify-center py-10">
              <Pagination
                currentPage={currentPage}
                onChange={value => setCurrentPage(value)}
                totalData={totalData}
                pageSize={limit}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
