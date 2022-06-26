import Header from '../components/Header'
import LessonsSideBar from '../components/LessonsSideBar'
import LessonVideoArea from '../components/LessonVideoArea'

function EventPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <LessonVideoArea />
        <LessonsSideBar />
      </main>
    </div>
  )
}

export default EventPage
