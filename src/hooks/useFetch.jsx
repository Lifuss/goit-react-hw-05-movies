import { useEffect, useState } from 'react';

export const useFetch = (fn, params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fn(params).then(data => setData(data));
  }, [fn, params]);

  return [data, setData];
};
