import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ method, url, body = null, headers = null }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);

    axios[method](url, headers, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [method, url, body, headers]);

  useEffect(() => {
    fetchData();
  }, [fetchData, method, url, body, headers]);

  return { data, error, loading };
};

export default useAxios;
