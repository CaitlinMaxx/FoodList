import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SearchPage from "./pages/SearchPage.js";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/searchPage" component={SearchPage} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
