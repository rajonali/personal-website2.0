import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Blog from './routes/blog/Blog';
import Whoami from './routes/whoami/Whoami';
import Admin from './routes/admin/Admin';


import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const home = () => <Home />;
const blog = () => <Blog />;
const whoami = () => <Whoami />;
const projects = () => <Projects />;
const admin = () => <Admin />;





function App() {
  return (
    <center>
    <div className="App" style={{ width:'800px'  }}>
    <Router>
  <div>
  <Header />
    <Route exact path="/" component={home}/>
    <Route exact path="/blog" component={blog}/>
    <Route exact path="/projects" component={projects}/>
    <Route exact path="/whoami" component={whoami}/>
    <Route exact path="/admin" component={admin}/>
    
  </div>
</Router>
  <Footer />






    </div>
    </center>
  );
}

export default App;
