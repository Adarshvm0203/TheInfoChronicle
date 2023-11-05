  import React, { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import { Badge } from 'react-bootstrap';
  import Sidebar from '../Component/Sidebar';
  import axios from 'axios';
  import Carousel1 from '../Component/Carousel';
  const Article = () => {
    const params = useParams();
    const { category, title } = params;
    const decodedTitle = decodeURIComponent(title).trim();

    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0d4abe355cf641f3968145a740d38e5a`;
    
      axios
        .get(apiUrl)
        .then((response) => {
          const selectedArticle = response.data.articles.find(
            (article) => article.title.replace(/\s/g, '-') === decodedTitle
          );
    
          if (selectedArticle) {
            setArticleData(selectedArticle);
          } else {
            apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0d4abe355cf641f3968145a740d38e5a';
    
            axios
              .get(apiUrl)
              .then((response) => {
                const newSelectedArticle = response.data.articles.find(
                  (article) => article.title.replace(/\s/g, '-') === decodedTitle
                );
    
                if (newSelectedArticle) {
                  setArticleData(newSelectedArticle);
                } else {
                  console.warn('Article not found in both APIs');
                }
              })
              .catch((error) => {
                console.error('Error fetching data from the second API:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error fetching data from the main API:', error);
        });
    }, [category, decodedTitle]);
    

    return (
      <div className="container">
      
        <div className="row">
          <div className="col-md-9">
          
            {articleData && (
              <div>
                <div className="animated-heading">
                  <h1>
                    Category:{' '}
                    {category ? (
                      <>{category}</>
                    ) : (
                      'HEADLINE'
                    )}
                  </h1>
                </div>
                <div className="row"> 
                  <div className="col-md-6"> 
                    <img
                      src={articleData.urlToImage}
                      alt="Article Image"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h2>{articleData.title}</h2>
                  </div>
                </div>
                <p>{articleData.content}</p>
              </div>  
            )}
            <Carousel1/>
           
          </div>
          <div className="col-md-3">
           <Sidebar/>
          </div>
        </div>
      </div>
    );
  };

  export default Article;
