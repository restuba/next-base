import React from 'react';

import getNickName from '@helpers/parser/getNickName';
import getPhotoById from '@services/photos/getPhotoById';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const PhotoID = ({ data }) => {
  return (
    <main className={`flex w-full flex-col ${poppins.className}`}>
      <div className="flex flex-col px-4 tablet:px-10">
        <div className="mx-auto grid min-h-screen w-full max-w-screen-laptopM py-16">
          <div className="flex flex-col gap-y-8">
            <h2 className="text-3xl font-semibold">{data?.alt || '-'}</h2>
            <div className="flex flex-row items-center gap-x-2 gap-y-8">
              <div className="flex size-10 min-h-10 min-w-10 items-center justify-center rounded-full bg-primary text-white group-aria-busy:animate-pulse group-aria-busy:bg-gray-200">
                {getNickName(data?.photographer)}
              </div>
              <span className="w-full text-lg text-gray-950">{data?.photographer || '-'}</span>
            </div>
            <Image
              src={data?.src?.large}
              alt={data?.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-md bg-red-600"
              placeholder="blur"
              blurDataURL="/assets/images/image-placeholder.png"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps = async context => {
  const { query } = context;
  const photoID = query.id;
  try {
    const data = await getPhotoById(photoID);
    return {
      props: {
        data
      }
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: {}
      }
    };
  }
};

export default PhotoID;
