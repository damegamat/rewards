import React from 'react'
import Dashboard from './components/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'

//TODO: could be nice to move from css to css in js
import './App.css'

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </div>
  )
}

export default App
