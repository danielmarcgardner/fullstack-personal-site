import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBarContainer';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignInContainer';
import SignUp from './Components/SignUp/SignUpContainer';
import BlogPage from './Components/Blog/BlogContainer';
import './App.css';

const App = props => (
  <BrowserRouter>
    <div>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/blog" component={BlogPage} />
    </div>
  </BrowserRouter>
);

export default App;
