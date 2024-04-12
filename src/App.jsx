import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Resultat from "./pages/Resultat"
import Detail from "./pages/Detail";
import Soin from "./pages/Soin";

function App() {

  return (
    <>
   
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resultat" element={<Resultat/>} />
            <Route path="/detail" element={<Detail/>} />
            <Route path="/soin" element={<Soin/>} />


          </Routes>
        </Router> 

    </>
  )
}

export default App
