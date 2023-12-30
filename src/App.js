import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./App/Components/HomePage";
import StoreButton from "./App/Components/StorebuttonPage/StoreButton";
import Formsubmitted from "./App/Components/FormSubmitted/Formsubmitted";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StoreButton/>}/>
        <Route path="/form" element={<Formsubmitted/>}/>
        <Route />
        </Routes>
        </BrowserRouter>
  )
}

export default App