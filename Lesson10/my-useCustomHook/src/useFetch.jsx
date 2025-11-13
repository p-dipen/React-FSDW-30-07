import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('Return url ', url, 'return data ', data);
        if (Object.getOwnPropertyNames(data).length > 0) {
          setData(data);
        } else {
          setError('No data found');
        }
      })
      .catch((err) => setError(err.message));
  }, [url]);
  return [data, error];
}
