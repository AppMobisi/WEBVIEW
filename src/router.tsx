import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { FavoritesCentral } from './Pages/FavoritesCentral'
import { Locations } from './Pages/Locations';
import { LocationDetails } from './Pages/LocationDetails';
import { Classification } from './Pages/Classification';
import { ProductDetails } from './Pages/ProductDetails';

const AppRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/central-favoritos" element={<FavoritesCentral />} />
        <Route path="/estabelecimentos" element={<Locations />} />
        <Route path="/estabelecimentos/:id" element={<LocationDetails />} />
        <Route path="/classificar/:id" element={<Classification />} />
        <Route path="/produtos/:productName/:productPrice/:productPhoto/:anuncianteId/:productDesc/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
  };

export default AppRouter;
