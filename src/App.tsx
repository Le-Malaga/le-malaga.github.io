import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Support from './pages/Support'
import Resources from './pages/Resources'
import SundaySessions from './pages/SundaySessions'
import Events from './pages/Events'
import GetInvolved from './pages/GetInvolved'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import GenericPage from './pages/GenericPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="resources" element={<Resources />} />
          <Route path="sunday-sessions" element={<SundaySessions />} />
          <Route path="events" element={<Events />} />
          <Route path="stories" element={<Stories />} />
          <Route path="stories/:id" element={<StoryDetail />} />
          <Route path="get-involved" element={<GetInvolved />} />
          
          {/* Default fallback for other routes for now */}
          <Route path="*" element={<GenericPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
