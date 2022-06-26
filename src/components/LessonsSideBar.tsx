import Lesson from './Lesson'
import { gql, useQuery } from '@apollo/client'
import { LessonEntity } from '../types/lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      lessonType
      slug
      title
    }
  }
`

type GraphCMSLessonsResponse = {
  lessons: LessonEntity[]
}

function LessonsSideBar() {
  const { data } = useQuery<GraphCMSLessonsResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <h2 className="font-bold text-2xl pb-6 border-b border-gray-500 mb-6">
        Cronograma de aulas
      </h2>
      <ul className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson lesson={lesson} key={lesson.id} />
        ))}
      </ul>
    </aside>
  )
}

export default LessonsSideBar
