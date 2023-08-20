import './App.css'
import {Navbar} from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {League} from './components/Generic/League'
import {Loader} from './components/Loader'
import { useState } from 'react'


function App() {
  const [season, setSeason] = useState('2023')
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Navbar setSeason={setSeason} season={season}/>
        <Routes>
          <Route exact path="/" element={
            <>
              { loading && <Loader />}
            <League id={'383'} setLoading={setLoading} season={season} />
            </>
          } />
          <Route path="/liga-leumit" element={
          <>
            {loading && <Loader />}
            <League id={'382'} setLoading={setLoading} season={season} />
          </>} />
          {/* <Route path="/liga-alef" element={<League id={'496'} />} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
    </div>
  )
}

export default App;
