import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', padding: '20px', marginTop: '50px', position: 'initial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
            <Link to="/health" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Health</Link>
            <Link to="/world" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>World</Link>
            <Link to="/business" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Bussiness</Link>
            <Link to="/science" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Science</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/entertainment" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Entertainment</Link>
            <Link to="/sports" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Sport</Link>
            <Link to="/technology" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>technology</Link>
            <Link to="/politics" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Politics</Link>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="./assets/tic.png"

            alt="News Logo"
            style={{ height: '100px', width: '100px', borderRadius: "80px" }}
          />
          <h3 style={{ margin: '10px 0' }}>The InfoChronicle</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Link to="/" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Home</Link>
            <Link to="/about" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>About</Link>
            <Link to="/contact" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Contact</Link>
            <Link to="/terms" style={{ margin: '5px 10px', textDecoration: 'none', color: 'black' }}>Terms</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: "600px" }}>
            <p>Get the latest and most relevant news at your fingertips with our intuitive news web application. Stay informed with a wide array of categories such as world news, business, technology, entertainment, health, science, sports, and politics. Our platform offers a dynamic carousel showcasing breaking news, ensuring you are updated on the most recent events. Dive deeper into the articles with just a click and stay ahead with up-to-the-minute information.</p>
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
