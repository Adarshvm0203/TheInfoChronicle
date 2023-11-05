import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { useParams } from 'react-router-dom';

const Sidebar = () => {
  const [data, setData] = useState([]);
  const apiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=0d4abe355cf641f3968145a740d38e5a'; // Replace with your API endpoint

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.articles || [])) // Make sure data.articles is an array
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  };

  return (
    <div className="container">
      <h3 style={{ marginTop: '20px' }}>Heading</h3>
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              <div className="d-flex align-items-center">
                <img
                  src={item.urlToImage}
                  alt="Small Image"
                  className="img-thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
                <h6
                  className="ml-3"
                  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px' }}
                >
                  <Link to={`/article/${encodeURIComponent(item.title.replace(/\s/g, '-'))}`}>{truncateString(item.title, 23)}</Link>
                </h6>
              </div>
            </li>
          ))
        ) : (
          <p>Loading...</p> // You can customize this based on your loading state
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
