import React, { useState } from "react";
import "./style.css";

export default function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction();

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  function slowFunction(num) {
    for(let i = 0; i < 10000000000; i++) {}
    return num * 2
  }


  return (
    <>
    <div className="container m-3">
    <input className='form-control' />
    </div>
    </>
  );
}
