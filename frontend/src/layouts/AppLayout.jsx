import radioWave from '../assets/radio-wave.svg'

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-lockup">
          <img className="brand-mark" src={radioWave} alt="" />
          <div>
            <p className="brand-kicker">Local engineering workspace</p>
            <p className="brand-name">AnyTone Codeplug Sandbox</p>
          </div>
        </div>
        <span className="environment-label">Development</span>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <span>Local processing baseline</span>
        <span>v0.1.0</span>
      </footer>
    </div>
  )
}

export default AppLayout