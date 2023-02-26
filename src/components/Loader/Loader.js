import React from 'react'
import './Loader.css'

function Loader({ children, isLoading }) {
  if (isLoading) {
    return (
      <div className='loader-wrapper'>
        <div className='loader' data-testid='loader' />
      </div>
    )
  }

  return children
}

export default Loader
