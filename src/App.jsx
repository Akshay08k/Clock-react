import React from 'react';
import 'react-tabs/style/react-tabs.css';
import CurrentTime from './Components/CurrentTime';
import Stopwatch from './Components/stopwatch';
import Alarm from './Components/alarm';
import WorldClock from './Components/worldclocks';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/current-time" element={<CurrentTime />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/world-times" element={<WorldClock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
