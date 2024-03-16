import { useState } from 'react'
import React from 'react';
import Body from './Browser-Components/body.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body></Body>
    </>
  )
}

export default App
