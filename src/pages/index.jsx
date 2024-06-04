import { useState } from 'react';

import Pagination from '@components/reusable/Pagination';
import ContentList from '@components/standalone/Home/ContentList';
import ContentTitle from '@components/standalone/Home/ContentTitle';
import SearchBar from '@components/standalone/Home/SearchBar';
import getListPhoto from '@services/photos/getListPhoto';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const limit = 8;
  // create state for dynamic content title
  // state: keyword (event input handler), query (content title)
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  // create on change handler here
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const onSearch = async () => {
    try {
      setQuery(keyword);
      const res = await getListPhoto({ query: keyword, page: currentPage, limit });
      setData(res?.photos || []);
      setTotalData(res?.total_results || 0);
    } catch (err) {
      console.log(err);
    }
  };

  // handling get list photo using use effect hooks here

  return (
    <main className={`flex w-full flex-col ${poppins.className}`}>
      <div className="flex flex-col px-4 py-12 tablet:px-10">
        <div className="mx-auto flex w-full max-w-screen-laptopM flex-col gap-y-8">
          <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} onSearch={onSearch} />
          <ContentTitle title={query} />
          <ContentList data={data} />
          {/* create pagination and then render here */}
          <Pagination
            currentPage={currentPage}
            limit={limit}
            totalData={totalData}
            onChange={value => {
              setCurrentPage(value);
            }}
          />
        </div>
      </div>
    </main>
  );
}
