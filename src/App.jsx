import React from 'react';
import ChartPanel from './components/ChartPanel';
import TablePanel from './components/TablePanel';
import ThemeToggle from './components/ThemeToggle'; // ✅ Step 1: Import ThemeToggle
import './index.css'; // ✅ Ensure CSS with theme support is loaded
import { color } from 'chart.js/helpers';

const App = () => {
  return (
    <div>
      {/* Step 2: Place ThemeToggle in a visible and styled header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--card-bg)',
        boxShadow: '0 2px 6px var(--header-shadow)'
      }}>
        <h1 id='main_heading'>📊 Interactive Dashboard</h1>
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main style={{ padding: '2rem' }}>
        {/* <div className="dashboard-layout">  side by side table and chart content */}
          <ChartPanel />
          <TablePanel />
        {/* </div> */}
      </main>
    </div>
  );
};

export default App;