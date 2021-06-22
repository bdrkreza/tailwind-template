import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/Header/Navbar/Navbar";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import FeatureProduct from "./Pages/FeatureProduct/FeatureProduct";
import Home from "./Pages/Home/Home";
import ProductView from "./Pages/ProductView/ProductView";
import Shops from "./Pages/Shops/Shops";
import CheckOut from "./Components/CheckOutSection/CheckOut/CheckOut";
import Admin from "./Dashboard/Admin/Admin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/shops" component={Shops} />
          <Route path="/feature" component={FeatureProduct} />
          <Route path="/blog" component={CheckOut} />
          <Route path="/productView/:Id" component={ProductView} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Admin} />
        </Switch>
      </Router>

    </>
  );
}

export default App;