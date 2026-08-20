import HealthStatusPanel from '../features/system-status/HealthStatusPanel.jsx'
import useHealthStatus from '../hooks/useHealthStatus.js'

function HomePage() {
  const healthStatus = useHealthStatus()

  return (
    <div className="home-page">
      <section className="workspace-heading" aria-labelledby="page-title">
        <p className="section-label">Foundation check</p>
        <h1 id="page-title">Codeplug engineering workspace</h1>
        <p>
          The application foundation is running locally. Conversion tools will
          be introduced only after the radio formats are verified.
        </p>
      </section>

      <HealthStatusPanel status={healthStatus} />
    </div>
  )
}

export default HomePage