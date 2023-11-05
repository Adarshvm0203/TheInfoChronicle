import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import worldnews from "../JsonData/world.json";
import "../Component/AnimatedHeading.css";

const cardContainerStyle = {
  display: "flex",
  flexDirection: "column", // Display items vertically
};

const customCardStyle = {
  position: "relative",
};

const cardTextContainerStyle = {
  position: "absolute",
  bottom: -10,
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: "white",
  padding: "10px",
};

const World = () => {
  const sortedItems = worldnews.items.sort((a, b) => b.timestamp - a.timestamp);
  const top3LatestItems = sortedItems.slice(0, 3);


  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Define the API URL you want to fetch data from
  //   const apiUrl = 'YOUR_API_URL_HERE';

  //   // Use Axios to fetch data from the API
  //   axios.get(apiUrl)
  //     .then((response) => {
  //       setData(response.data.items);  // Update the 'data' state with the fetched data
  //       setLoading(false);  // Set loading to false
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data: ', error);
  //       setLoading(false);  // Set loading to false in case of an error
  //     });
  // }, []);
//   <div>
//   <h1>API Data in ReactJS</h1>
//   {loading ? (
//     <p>Loading data...</p>
//   ) : (
//     <ul>
//       {data.map((item, index) => (
//         <li key={index}>
//           <a href={item.newsUrl} target="_blank" rel="noopener noreferrer">
//             {item.title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div style={cardContainerStyle}>
            <div className="animated-heading">
              <h1 className="heading-text">WorldNews</h1>
            </div>

            <div style={customCardStyle}>
              <Card key={0} inverse style={{ marginTop: 30 }}>
                <CardImg
                  alt="Card image cap"
                  src={
                    top3LatestItems[0].images &&
                    top3LatestItems[0].images.thumbnail
                      ? top3LatestItems[0].images.thumbnail
                      : "fallback_image_url"
                  }
                  style={{
                    height: 370,
                    width: 420,
                  }}
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">{top3LatestItems[0].title}</CardTitle>
                <CardText>{top3LatestItems[0].description}</CardText>
                

                <small className="text-muted">
                  Last updated{" "}
                  {top3LatestItems[0].timestamp
                    ? new Date(
                        parseInt(top3LatestItems[0].timestamp)
                      ).toLocaleString()
                    : "N/A"}
                </small>
              </CardBody>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div style={cardContainerStyle}>
            <div style={customCardStyle}>
              <Card key={1} inverse>
                <CardImg
                  alt="Card image cap"
                  src={
                    top3LatestItems[1].images &&
                    top3LatestItems[1].images.thumbnail
                      ? top3LatestItems[1].images.thumbnail
                      : "fallback_image_url"
                  }
                  style={{
                    height: 200, // Reduced height
                    width: 310, // Reduced width

                  }}
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">{top3LatestItems[1].title}</CardTitle>
                <CardText>{top3LatestItems[1].description}</CardText>
             

                <small className="text-muted">
                  Last updated{" "} 
                  {top3LatestItems[1].timestamp
                    ? new Date(
                        parseInt(top3LatestItems[1].timestamp)
                      ).toLocaleString()
                    : "N/A"}
                </small>
              </CardBody>
            </div>
            <div style={customCardStyle}>
              <Card key={2} inverse>
                <CardImg
                  alt="Card image cap"
                  src={
                    top3LatestItems[2].images &&
                    top3LatestItems[2].images.thumbnail
                      ? top3LatestItems[2].images.thumbnail
                      : "fallback_image_url"
                  }
                  style={{
                    height: 200, // Reduced height
                    width: 310, // Reduced width
                  }}
                />
              </Card>
              <CardBody>
                <CardTitle tag="h5">{top3LatestItems[2].title}</CardTitle>
                <CardText>{top3LatestItems[2].description}</CardText>
                

                <small className="text-muted">
                  Last updated{" "}
                  {top3LatestItems[2].timestamp
                    ? new Date(
                        parseInt(top3LatestItems[2].timestamp)
                      ).toLocaleString()
                    : "N/A"}
                </small>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;

