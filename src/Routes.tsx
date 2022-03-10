import NavBar from 'components/Navbar/navbar';
import Catalog from 'pages/Catalog/catalog';
import Home from 'pages/Home/home';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

const Routs = () => (

  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
    </Routes>
  </BrowserRouter>

);

export default Routs;
