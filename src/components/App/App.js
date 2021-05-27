import React from "react";
import './App.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import About from "../About/About";
import ArticlesContainer from "../Articles/ArticlesContainer";

function App() {
  return (
    <div className="App">
     <Header />
     <Navbar/>
     <div className="content">
         <Route path='/articles' render={ () => <ArticlesContainer />} />
         {/*<Route path='/commercials' render={ () => <Commercials />} />*/}
         <Route path='/about' render={ () => <About />} />
     </div>

    </div>
  );
}

export default App;
