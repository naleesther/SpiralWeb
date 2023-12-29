import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Index from "./App/Components";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        </Routes>
        </BrowserRouter>
  )
}

export default App