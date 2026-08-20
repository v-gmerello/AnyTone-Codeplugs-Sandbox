import StatusBadge from '../../components/StatusBadge.jsx'

const STATUS_COPY = {
  loading: {
    title: 'Checking backend connection',
    description: 'Waiting for the local API health response.',
  },
  connected: {
    title: 'Backend connection ready',
    description: 'The local API responded successfully.',
  },
  unavailable: {
    title: 'Backend connection unavailable',
    description: 'The local API could not be reached. Verify that it is running.',
  },
}

function HealthStatusPanel({ status }) {
  const copy = STATUS_COPY[status]

  return (
    <section className="health-panel" aria-labelledby="health-title">
      <div className="health-panel__header">
        <div>
          <p className="section-label">System status</p>
          <h2 id="health-title">{copy.title}</h2>
        </div>
        <StatusBadge status={status} />
      </div>

      <p
        className="health-panel__message"
        role={status === 'unavailable' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {copy.description}
      </p>

      <dl className="health-details">
        <div>
          <dt>Service</dt>
          <dd>Spring Boot API</dd>
        </div>
        <div>
          <dt>Endpoint</dt>
          <dd>/api/health</dd>
        </div>
        <div>
          <dt>Mode</dt>
          <dd>Local only</dd>
        </div>
      </dl>
    </section>
  )
}

export default HealthStatusPanel