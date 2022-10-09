import React, { useState, useMemo } from "react";
import "./style.css";

export default function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return  slowFunction(number);
  }, [number])

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  function slowFunction(num) {
    for(let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  return (
    <>
    <div className="container m-3">
    <input 
    value={number} 
    type='number' 
    className='form-control w-50'
    onChange={e => setNumber(parseInt(e.target.value))} />

    <button 
    className={'btn btn-outline-primary mt-3'}
    onClick={() => setDark(prevTheme => !prevTheme)}
    >Change theme</button>

    <div style={themeStyles}>{doubleNumber}</div>
    </div>
    </>
  );
}
