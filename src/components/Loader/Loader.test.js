import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from './Loader'

const MockComponent = () => <div>Children</div>

describe('Loader', () => {
  describe('isLoading is true', () => {
    beforeEach(() => {
      render(
        <Loader isLoading={true}>
          <MockComponent />
        </Loader>
      )
    })

    it('renders loader component', () => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    it('not renders children', () => {
      expect(screen.queryByText(/Children/i)).not.toBeInTheDocument()
    })
  })

  describe('isLoading is false', () => {
    beforeEach(() => {
      render(
        <Loader isLoading={false}>
          <MockComponent />
        </Loader>
      )
    })

    it('not renders loader component', () => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    })

    it('renders children', () => {
      expect(screen.getByText(/Children/i)).toBeInTheDocument()
    })
  })
})
