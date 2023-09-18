import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';

const AppRouter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
  };

export default AppRouter;
