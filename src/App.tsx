import './App.css'
import { Islip, KingsMillUpstream } from './river-height-service/reading-stations';
import ReadingStation from './ReadingStation';

function App() {
  return (
    <>
      <div>
        <ReadingStation station={KingsMillUpstream} />
      </div>
      <div style={{marginTop: "5rem"}}>
        <ReadingStation station={Islip} />
      </div>
      <div>
        <h2>
          <div><a href="https://twitter.com/marstonbikepath">
            Marston Cycle Path - Twitter
          </a></div>
          <div><a href="http://urchin.earth.li/~ganesh/cgi-bin/psychopath.pl?mode=view">
            Ganesh S Website
          </a></div>
        </h2>
      </div>
    </>
  )
}

export default App
