import React from 'react';
import './App.css';
import Home from './Component/Home';
import Singlepage from'./Component/Singlepage';
// import Error from'./Component/Error';
import{BrowserRouter,Routes,Route}from "react-router-dom"

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie/:id" element={<Singlepage/>}/>
    {/* <Route path="*" element={<Error/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
