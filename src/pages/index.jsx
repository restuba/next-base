import { useState } from 'react';

import Pagination from '@components/reusable/Pagination';
import ContentList from '@components/standalone/Home/ContentList';
import ContentTitle from '@components/standalone/Home/ContentTitle';
import SearchBar from '@components/standalone/Home/SearchBar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export default function Home() {
  // create state for dynamic content title
  // state: keyword (event input handler), query (content title)
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');

  // create on change handler here
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const onSearch = () => {
    setQuery(keyword);
  };

  return (
    <main className={`flex w-full flex-col ${poppins.className}`}>
      <div className="flex flex-col px-4 py-12 tablet:px-10">
        <div className="mx-auto flex w-full max-w-screen-laptopM flex-col gap-y-8">
          <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} onSearch={onSearch} />
          <ContentTitle title={query} />
          <ContentList />
          {/* create pagination and then render here */}
          <Pagination />
        </div>
      </div>
    </main>
  );
}
