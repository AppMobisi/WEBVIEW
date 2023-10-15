import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { FavoritesCentral } from './Pages/FavoritesCentral'
import { Locations } from './Pages/Locations';
import { LocationDetails } from './Pages/LocationDetails';

const AppRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/central-favoritos" element={<FavoritesCentral />} />
        <Route path="/estabelecimentos" element={<Locations />} />
        <Route path="/estabelecimentos/:id" element={<LocationDetails />} />
      </Routes>
    </Router>
  );
  };

export default AppRouter;
