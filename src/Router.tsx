import { Routes, Route } from 'react-router-dom'
import EventPage from './pages/EventPage'
import SubscriptionPage from './pages/SubscriptionPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SubscriptionPage />} />
      <Route path="/evento/aula/:lessonSlug" element={<EventPage />} />
    </Routes>
  )
}

export default Router
