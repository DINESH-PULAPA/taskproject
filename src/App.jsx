import React from 'react';
import Scene from './components/Scene';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ErrorBoundary>
          <Scene />
          <ThemeToggle />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
