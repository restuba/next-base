import fetcher from '@helpers/fetcher';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API_PEXELS;

const getPhotoById = async (id = '') => {
  const configs = {
    url: `${baseURL}/v1/photos/${id}`,
    method: 'GET'
  };

  const response = await fetcher(configs);
  return response;
};

export default getPhotoById;
