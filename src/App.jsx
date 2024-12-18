import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

const [chartData, setChartData] = useState(null);
useEffect(() => {
  fetch('/data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);
if (!chartData) {
  return <div>Loading...</div>;
}
return (
  <div style={{ textAlign: 'center' }}>
    <h1>Dynamic Charts with React and Chart.js</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
);
