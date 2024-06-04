import fetcher from '@helpers/fetcher';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API_PEXELS;

const getListPhoto = async ({ query = '', limit = 10, page = 1 }) => {
  const configs = {
    url: `${baseURL}/v1/search?query=${query}&per_page=${limit}&page=${page}`,
    method: 'GET'
  };

  const response = await fetcher(configs);
  return response;
};

export default getListPhoto;
