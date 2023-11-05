import React from "react";
import LatestNews from "../Component/Latestnews";
import Business from "../Component/Business";
import Entertainment from "../Component/Entertainment";
import Health from "../Component/Health";
import Science from "../Component/Science";
import Sport from "../Component/Sport";
import Technology from "../Component/Technology";
import Sidebar from "../Component/Sidebar";
import Carousel1 from "../Component/Carousel";
import Politics from "../Component/Politics";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <LatestNews />
          <Carousel1 />
          {'  '}
          <hr />
          <hr />
          <div className="col-md-8">
            {/* Display the latest news component in a 9-column wide section */}
           
            <Entertainment />
            <hr />
            <Health />
            <hr />
            <Sport />
            <hr />
            <Science />
            <hr />
            <Technology />
            <hr />
            <Business />
          </div>
          <div className="col-md-4">
            {/* Display the sidebar component in a 3-column wide section */}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


