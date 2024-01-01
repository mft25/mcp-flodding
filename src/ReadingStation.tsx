import { useState } from 'react'
import { getLatestRiverHeight, getReadingStationUrl } from './river-height-service/river-height-service'
import ReadingStationType from './river-height-service/ReadingStationType';

function ReadingStation(props: {station: ReadingStationType}) {
  const [reading, setReading] = useState<any>(null);

  getLatestRiverHeight(props.station.stationCode, setReading);

  return (
    <>
      <h2>Current river height at {props.station.name}{!!reading && " (" + reading.dateTime + ")"}:</h2>
      <h1>{!!reading ? reading.value.toFixed(2) + "m" : "loading..."}</h1>
      <h2><a href={getReadingStationUrl(props.station.stationId)}>
        Link
      </a></h2>
      <div>Highest OK: {props.station.highestOk}m</div>
      <div>Lowest NOT OK: {props.station.lowestNotOk}m</div>
    </>
  )
}

export default ReadingStation
