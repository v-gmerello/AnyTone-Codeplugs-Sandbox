const STATUS_LABELS = {
  loading: 'Checking',
  connected: 'Connected',
  unavailable: 'Unavailable',
}

function StatusBadge({ status }) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      <span className="status-badge__dot" aria-hidden="true" />
      {STATUS_LABELS[status]}
    </span>
  )
}

export default StatusBadge