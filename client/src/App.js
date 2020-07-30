import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchFoodPage from "./pages/SearchFoodPage.js";
import SearchMealPage from "./pages/SearchMealPage.js";
import Search from "./pages/Search.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/SearchFoodPage" component={SearchFoodPage} />
            <Route exact path="/SearchMealPage" component={SearchMealPage} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
