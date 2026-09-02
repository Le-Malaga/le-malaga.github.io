import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string | null>(null)

  const handleAction = (action: string) => {
    setMessage(`User Journey Step: ${action}`)
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <div className="app-container">
      {message && (
        <div className="toast-message">
          {message}
        </div>
      )}
      
      <div className="prototype-container">
        <img src="/design.jpeg" alt="Le Malaga Prototype" className="prototype-image" />
        
        {/* Hotspots */}
        {/* Navigation */}
        <div className="hotspot nav-home" onClick={() => handleAction('Navigating to Home')} title="Home"></div>
        <div className="hotspot nav-about" onClick={() => handleAction('Navigating to About Us')} title="About Us"></div>
        <div className="hotspot nav-donate" onClick={() => handleAction('Navigating to Donation Page')} title="Donate"></div>
        
        {/* Hero */}
        <div className="hotspot hero-support" onClick={() => handleAction('Exploring "I Need Support"')} title="I Need Support"></div>
        <div className="hotspot hero-join" onClick={() => handleAction('Joining Community')} title="Join Our Community"></div>
        
        {/* Action Cards */}
        <div className="hotspot card-start" onClick={() => handleAction('Starting journey for new carers')} title="Start Here"></div>
        <div className="hotspot card-get-support" onClick={() => handleAction('Finding support options')} title="Get Support"></div>
        <div className="hotspot card-join-now" onClick={() => handleAction('Signing up for community')} title="Join Now"></div>
        <div className="hotspot card-resources" onClick={() => handleAction('Browsing resources')} title="Explore Resources"></div>
        
        {/* Events */}
        <div className="hotspot event-zoom" onClick={() => handleAction('Registering for Sunday Session Zoom')} title="Join on Zoom"></div>
        <div className="hotspot event-more" onClick={() => handleAction('Viewing event details')} title="More Info"></div>
        
        {/* Stories */}
        <div className="hotspot stories-read" onClick={() => handleAction('Reading Aiga Stories')} title="Read Stories"></div>
        
        {/* Newsletter */}
        <div className="hotspot footer-subscribe" onClick={() => handleAction('Subscribing to updates')} title="Subscribe"></div>
      </div>
    </div>
  )
}

export default App
