import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = props => (
  <BrowserRouter>
    <div>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
