import { useEffect, useState } from 'react'
import { getHealth } from '../services/api/healthApi.js'

function useHealthStatus() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true

    getHealth()
      .then((health) => {
        if (active) {
          setStatus(health?.status === 'UP' ? 'connected' : 'unavailable')
        }
      })
      .catch(() => {
        if (active) {
          setStatus('unavailable')
        }
      })

    return () => {
      active = false
    }
  }, [])

  return status
}

export default useHealthStatus