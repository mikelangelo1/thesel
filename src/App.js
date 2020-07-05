import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import  Logo  from './logo.svg'
import Navbar from './components/Navbar/navbar'
import Landing from './components/landing'
import Learn from './components/learn'
import Cards from './components/cards'
import Footer from './components/footer'
import NavbarContainer from './components/Navbar/index'
import './sass/navbar.scss'


function App() {
  return (
    <React.Fragment>

        <NavbarContainer />
        <Router>
          <Link to="" className="home">Home</Link>
        </Router>
        <div>
          <img src={Logo} className="logo"></img>
        </div>
        <Landing />
        <Learn />
        <Cards />
        <Footer />
    </React.Fragment>
      
  );
}

export default App;
