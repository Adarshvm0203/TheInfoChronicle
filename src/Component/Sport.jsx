import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import "./AnimatedHeading.css";
import { Link } from "react-router-dom"; // Import Link

const Sport = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=0d4abe355cf641f3968145a740d38e5a"
      )
      .then((response) => {
        setArticles(response.data.articles);
        console.warn("ooooooooooooooooooooo",response.data.articles)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const top3LatestItems = articles.slice(0,4);
  const category = "sports"; // Set the category dynamically

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
    flex: 1, // Let the second column expand to fill available space
  };

  return (
    <div className="container" style={customStyle}>
      <div className="animated-heading green-heading">
        <h1 className="heading-text">Sport</h1>
      </div>
      <div className="row" style={columnStyle}>
        <div className="col-lg-4" style={{ marginTop: 30, width: 420 }}>
          <Card inverse style={{ height: "100%" }}>
            <CardImg
              alt="Card image cap"
              src={top3LatestItems[1]?.urlToImage || "fallback_image_url"}
              style={{ height: 380 }}
            />
            <CardBody>
            <CardTitle style={{ color: "black" }} tag="h5">
            <Link to={`/article/${category}/${top3LatestItems[2]?.title.replace(/\s/g, '-')}`}>
            {top3LatestItems[1]?.title}
          </Link>
          
              {top3LatestItems[1]?.title}
            </CardTitle>
              <CardText style={{ color: "black", ...textMutedStyle }}>
                {top3LatestItems[1]?.content}
              </CardText>
              <CardText style={{ color: "black", ...textMutedStyle }}>
                {top3LatestItems[1]?.description}
              </CardText>
               <CardText style={{ color: "black" }}>
                {top3LatestItems[1]?.content}
              </CardText>
            
              <CardText style={textMutedStyle}>
                {top3LatestItems[1]?.description}
              </CardText>
              <small style={{ ...textMutedStyle }}>
                Published at{" "}
                {new Date(top3LatestItems[1]?.publishedAt).toLocaleString()}
              </small>
              
              <CardText style={{ ...textMutedStyle }}>
                {top3LatestItems[1]?.source.name}
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-4" style={secondColumnStyle}>
          {top3LatestItems.slice(2).map((article, index) => (
            <div key={index} style={rowStyle}>
              <Card inverse style={{ marginTop: 30, width: 420 }}>
                <CardImg
                  alt="Card image cap"
                  src={article.urlToImage || "fallback_image_url"}
                  style={{ height: "100%" }} // Fill the entire column height
                />
                <CardBody>
                  <CardTitle style={{ color: "black" }} tag="h5">
                    
                  <Link to={`/article/${category}/${article.title.replace(/\s/g, '-')}`}>
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

export default Sport;
