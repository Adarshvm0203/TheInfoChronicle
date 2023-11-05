import React, { useEffect, useState } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";
import newsData from "../JsonData/news.json";
import axios from "axios";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "0d4abe355cf641f3968145a740d38e5a";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
         // Sort articles by publishedAt date in descending order (most recent first)
         const sortedNews = response.data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        // Slice the first 3 articles
        const top3LatestNews = sortedNews.slice(3,7);

        setNews(top3LatestNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  const cardGroupStyle = {
    margin: "15px", // 10px margin on all sides
  };



  const imageStyle = {
    height: "300px", // Set a fixed height for the images
    objectFit: "cover",
  };

  const cardImgStyle = {
    cursor: "pointer", // Change the cursor to a pointer to indicate it's clickable
    border: "2px solid #ccc", // Add a border around the images
  };

  const customCardStyle = {
    margin: "10px", // Adjust margin as needed
  };
  const cardTextContainerStyle = {
    position: "absolute",
    bottom: -10,
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "white",
    padding: "10px",
  };

  return (
    <div style={cardGroupStyle}>
      <CardGroup>
        {news.map((article, index) => (
          <Card key={index} style={customCardStyle}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <CardImg
                alt={article.title}
                src={article.urlToImage}
                top
                style={{ ...imageStyle, ...cardImgStyle }} // Apply image and card styling
              />

              <CardImgOverlay>
                <div style={cardTextContainerStyle}>
                  <CardTitle tag="h5">{article.title}</CardTitle>
                  
                 
                </div>
              </CardImgOverlay>
            </a>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default LatestNews;
