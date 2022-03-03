import NavBar from 'components/Navbar/navbar';
import Catalog from 'pages/Catalog/catalog';
import Home from 'pages/Home/home';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';

const Routs = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route> 
      </Switch>
  </BrowserRouter>
);

export default Routs;
