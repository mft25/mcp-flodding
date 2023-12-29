import { useState } from 'react'
import './App.css'
import { getRiverHeight, getReadingStationUrl } from './river-height-service/river-height-service'
import { KingsMillUpstreamCode, IslipCode, KingsMillUpstreamStationId, IslipStationId } from './river-height-service/reading-stations';

function App() {
  const [kmHeight, setKmHeight] = useState(0);
  const [islipHeight, setIslipHeight] = useState(0);

  const setRiverHeight = (data: any) => {
    const height = data.data.items[0].value;
    
    setKmHeight(height);
  }

  const setRiverHeight2 = (data: any) => {
    const height = data.data.items[0].value;
    
    setIslipHeight(height);
  }


  getRiverHeight(KingsMillUpstreamCode, setRiverHeight);
  getRiverHeight(IslipCode, setRiverHeight2);

  return (
    <>
      <div>
        <h2>Current river height at King's Mill:</h2>
        <h1>{kmHeight.toFixed(2)} m</h1>
        <h2><a href={getReadingStationUrl(KingsMillUpstreamStationId)}>
          Link
        </a></h2>
      </div>
      <div style={{marginTop: '5rem'}}>
        <h2>Current river height at Islip:</h2>
        <h1>{islipHeight.toFixed(2)} m</h1>
        <h2><a href={getReadingStationUrl(IslipStationId)}>
        Link
        </a></h2>
      </div>
    </>
  )
}

export default App
