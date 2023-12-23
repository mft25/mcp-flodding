import { useState } from 'react'
import './App.css'
import { getRiverHeight } from './river-height-service/river-height-service'

function App() {
  const [data, setData] = useState(0);

  const setRiverHeight = (data: any) => {
    const height = data.data.items[0].value;
    
    setData(height);
  }

  getRiverHeight(setRiverHeight);

  return (
    <>
      <h2>Current river height at King's Mill:</h2>
      <h1>{data.toFixed(2)} m</h1>
    </>
  )
}

export default App
