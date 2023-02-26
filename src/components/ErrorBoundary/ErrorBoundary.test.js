import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary, { ERROR_MESSAGE } from './ErrorBoundary'

const MockComponent = ({ throwError }) => {
  if (throwError) {
    throw throwError
  }
  return <div>Children</div>
}

describe('ErrorBoundary', () => {
  describe('when there is no error', () => {
    beforeEach(() => {
      render(
        <ErrorBoundary>
          <MockComponent />
        </ErrorBoundary>
      )
    })

    it('renders children', () => {
      expect(screen.getByText(/Children/i)).toBeInTheDocument()
    })
  })

  describe('when there is an error', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {})
      jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch')
      render(
        <ErrorBoundary>
          <MockComponent throwError={new Error('Error')} />
        </ErrorBoundary>
      )
    })

    it('calls component did catch', () => {
      expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled()
    })

    it('renders error message', () => {
      expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument()
    })
  })
})
