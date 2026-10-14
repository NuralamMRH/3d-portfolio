import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Top-level safety net: if any component throws during render (e.g. a WebGL
// failure in a 3D library), show a fallback instead of leaving a blank page.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App error boundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            textAlign: 'center',
            color: '#fff',
            background: '#000',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>
            Something went wrong loading this page.
          </h1>
          <p style={{ margin: 0, opacity: 0.8 }}>
            Try enabling hardware acceleration in your browser, or disable
            privacy extensions that block WebGL, then reload.
          </p>
          {this.state.error?.message && (
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.875rem' }}>
              {this.state.error.message}
            </p>
          )}
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
