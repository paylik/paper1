import React from "react";
import './App.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import About from "../About/About";
import ArticlesContainer from "../Articles/ArticlesContainer";
import s from "./App.module.css";
import CommercialsList from "../Commercials/CommercialsList";

function App() {
  return (
    <div className={s.app}>
     <Header />
     <Navbar/>
     <div className = {s.content} >
         <Route path='/articles' render={ () => <ArticlesContainer />} />
         <Route path='/commercials' render={ () => <CommercialsList />} />
         <Route path='/about' render={ () => <About />} />
     </div>

    </div>
  );
}

export default App;
