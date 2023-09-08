import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top/Top";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
function App() {

 

 
  return (
    <div className="App">
      <Top/>
      <Main />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
