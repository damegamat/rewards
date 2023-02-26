import React from 'react'

export const ERROR_MESSAGE = 'Something went wrong.'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>{ERROR_MESSAGE}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
