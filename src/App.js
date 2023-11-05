import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home';
import Topbar from './Component/Topbar';
import Article from './Pages/Articles';
import World from './Pages/World';
import Business from './Component/Business';
import Entertainment from './Component/Entertainment';
import Health from './Component/Health';
import Science from './Component/Science';
import Sport from './Component/Sport';
import Technology from './Component/Technology';
import Sidebar from './Component/Sidebar';
import Businesspage from './Pages/Businesspage';
import Healthpage from './Pages/Healthpage';
import Entertainmentpage from './Pages/Entertainmentpage';
import Sciencepage from './Pages/Sciencepage';
import Sportspage from './Pages/Sportspage';
import Technologypage from './Pages/Technologypage';
import Politics from './Component/Politics';
import Footer from './Component/Footer';
import ScrollToTopButton from './Component/ScrollToTopButton';
function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/world" element={<World />} />
          <Route path="/business" element={<Businesspage />} />
          <Route path="/health" element={<Healthpage />} />
          <Route path="/entertainment" element={<Entertainmentpage />} />
          <Route path="/science" element={<Sciencepage />} />
          <Route path="/sports" element={<Sportspage />} />
          <Route path="/technology" element={<Technologypage />} />
          <Route path="/politics" element={<Politics />} />

          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sport />} />
          <Route path="/technology" element={<Technology />} />

          <Route path="/article/:category/:title" element={<Article />} /> {/* With category */}
          <Route path="/article/:title" element={<Article />} /> {/* Without category */}
        </Routes>
        <Footer />
        <ScrollToTopButton /> {/* Include the ScrollToTopButton here */}
      </Router>


    </>
  );
}

export default App;
