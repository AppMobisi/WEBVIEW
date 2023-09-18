import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/Login';
import { Home } from './Pages/Home';
import { Lideres } from './Pages/Ranking';
import { NavBar } from './Components/NavBar';

const AppRouter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/inicio"
          element={
            <>
              <NavBar isOpen={isMenuOpen} handleToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
              <Routes>
                <Route index element={<Home />} />
                <Route path="lideres" element={<Lideres />} />
              </Routes>
            
            </>
          }
        />
        <Route
          path="/ranking"
          element={
            <>
              <NavBar isOpen={isMenuOpen} handleToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
              <Routes>
                <Route index element={<Lideres />} />
              </Routes>
            
            </>
          }
        />
      </Routes>
    </Router>
  );
  };

export default AppRouter;
