import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders My app', () => {
  render(<App />)
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
})
