import { Routes, Route } from 'react-router-dom'
import EventPage from './pages/EventPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/evento/aula/:lessonSlug" element={<EventPage />} />
    </Routes>
  )
}

export default Router
