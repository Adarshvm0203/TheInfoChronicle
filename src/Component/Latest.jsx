import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Latest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://google-news13.p.rapidapi.com/latest',
        params: { lr: 'en-US' },
        headers: {
          'X-RapidAPI-Key': '040bc76260mshcc507af0414db3dp15e656jsn675bd87d0a6f',
          'X-RapidAPI-Host': 'google-news13.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.warn("latestNews",response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts.
  }, []);

  return (
   
      <div>
      <h1>This is Latest News</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
   
  );
};

export default Latest;
