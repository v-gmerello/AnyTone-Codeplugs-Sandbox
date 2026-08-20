import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App.jsx'
import { getHealth } from './services/api/healthApi.js'

vi.mock('./services/api/healthApi.js', () => ({
  getHealth: vi.fn(),
}))

describe('App', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('renders the application while health is loading', () => {
    getHealth.mockReturnValue(new Promise(() => {}))

    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Codeplug engineering workspace' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Checking')).toBeInTheDocument()
    expect(
      screen.getByText('Waiting for the local API health response.'),
    ).toBeInTheDocument()
  })

  it('shows the connected state after a successful health response', async () => {
    getHealth.mockResolvedValue({ status: 'UP' })

    render(<App />)

    expect(await screen.findByText('Connected')).toBeInTheDocument()
    expect(
      screen.getByText('The local API responded successfully.'),
    ).toBeInTheDocument()
  })

  it('shows the unavailable state when the health request fails', async () => {
    getHealth.mockRejectedValue(new Error('Network unavailable'))

    render(<App />)

    expect(await screen.findByText('Unavailable')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent(
      'The local API could not be reached.',
    )
  })
})