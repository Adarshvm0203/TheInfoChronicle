import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import "./AnimatedHeading.css";
import { Link } from "react-router-dom";

const Politics = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_321385ac33a83ec7146132b7dbfe45611a231&q=politics ');
        console.warn('Fetched data:', response.data);

        if (response.data && response.data.results) {
          const top3News = response.data.results.slice(0, 3);
          console.warn('Top 3 News:', top3News);
          // Handle the top 3 news data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const category = "politics"; // Set the category dynamically

  const textMutedStyle = {
    color: "black",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const columnStyle = {
    display: "flex",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const customStyle = {
    "--bs-gutter-x": "-5.5rem",
  };

  const secondColumnStyle = {
    flex: 1,
  };

  return (
    <div className="container" style={customStyle}>
      <div className="animated-heading green-heading">
        <h1 className="heading-text">Politics</h1>
      </div>
      <div className="row" style={columnStyle}>
        {articles.length > 0 && articles[0] ? (
          <div className="col-lg-4" style={{ marginTop: 30, width: 420 }}>
            <Card inverse style={{ height: "100%" }}>
              <CardImg
                alt="Card image cap"
                src={articles[0]?.urlToImage || "fallback_image_url"}
                style={{ height: 380 }}
              />
              <CardBody>
                <CardTitle style={{ color: "black" }} tag="h5">
                  <Link to={`/article/${category}/${articles[0]?.title.replace(/\s/g, "-")}`}>
                    {articles[0]?.title}
                  </Link>
                </CardTitle>
                <CardText style={{ color: "black", ...textMutedStyle }}>
                  {articles[0]?.content}
                </CardText>
                <CardText style={{ color: "black", ...textMutedStyle }}>
                  {articles[0]?.description}
                </CardText>
                <small style={{ ...textMutedStyle }}>
                  Published at{" "}
                  {new Date(articles[0]?.publishedAt).toLocaleString()}
                </small>
                <CardText style={{ ...textMutedStyle }}>
                  {articles[0]?.source.name}
                </CardText>
              </CardBody>
            </Card>
          </div>
        ) : null}
        <div className="col-lg-4" style={secondColumnStyle}>
          {articles.slice(1).map((article, index) => (
            <div key={index} style={rowStyle}>
              <Card inverse style={{ marginTop: 30, width: 420 }}>
                <CardImg
                  alt="Card image cap"
                  src={article.urlToImage || "fallback_image_url"}
                  style={{ height: "100%" }}
                />
                <CardBody>
                  <CardTitle style={{ color: "black" }} tag="h5">
                    <Link to={`/article/${category}/${article.title.replace(/\s/g, "-")}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardText style={{ ...textMutedStyle }}>
                    {article.content}
                  </CardText>
                  <CardText style={{ ...textMutedStyle }}>
                    {article.description}
                  </CardText>
                  <small style={{ ...textMutedStyle }}>
                    Published at{" "}
                    {new Date(article.publishedAt).toLocaleString()}
                  </small>
                  <CardText style={{ ...textMutedStyle }}>
                    {article.source.name}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politics;
