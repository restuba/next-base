// MAKE SURE URL ALREADY DEFINED
// IN NEXT.CONFIG.JS AND DO NOT ACCESS ALL PUBLIC URL DIRECTLY WITHOUT DEFINING IN NEXT.CONFIG

const fetcher = fetchConfig => {
  const { url, method, body, type } = fetchConfig;
  // set req headers
  const headers = {
    accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_BASE_URL_API_PEXELS_KEY
  };

  // set req options and body
  const options =
    method === 'POST' || method === 'PATCH' || method === 'PUT'
      ? {
          method,
          headers,
          ...(type !== 'file' ? { body: JSON.stringify(body) } : { body })
        }
      : {
          method,
          headers
        };

  return fetch(url, { ...options })
    .then(resp => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp);
      }
      if (type === 'arrayBuffer') return resp.arrayBuffer();
      if (type === 'text') return resp.text();
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      // return error response
      return e?.json?.().then?.(resp => {
        const errObj = {
          ...resp,
          code: e.status
        };
        return Promise.reject(errObj);
      });
    });
};

export default fetcher;
