import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { FavoritesCentral } from './Pages/FavoritesCentral'
import { Locations } from './Pages/Locations';
import { LocationDetails } from './Pages/LocationDetails';
import { ProductDetails } from './Pages/ProductDetails';
import { ProductsHub } from './Pages/ProductsHub';

const AppRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Home />} />
        <Route path="/central-favoritos" element={<FavoritesCentral />} />
        <Route path="/estabelecimentos/:coordX/:coordY" element={<Locations />} />
        <Route path="/estabelecimentos/:name/:vicinity/:rating/:photos/:id" element={<LocationDetails />} />
        <Route path="/produtos/:productName/:productPrice/:productPhoto/:anuncianteId/:productDesc/:productId" element={<ProductDetails />} />
        <Route path="/produtos" element={<ProductsHub />} />
      </Routes>
    </Router>
  );
  };

export default AppRouter;
