import { CheckCircle, Lock } from 'phosphor-react'
import { LessonEntity } from '../types/lesson'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type LessonProps = {
  lesson: LessonEntity
}

function Lesson({ lesson }: LessonProps) {
  const isLessonAvailable = isPast(new Date(lesson.availableAt))
  const formatedAvailableDate = format(
    new Date(lesson.availableAt),
    "EEE' • 'd ' de ' MMMM' • 'k'h'mm",
    { locale: ptBR }
  )

  return (
    <li>
      <span className="text-gray-300">{formatedAvailableDate}</span>
      <a href="#" className="rounded border border-gray-500 p-4 mt-2 block">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm font-medium text-blue-500 flex items-center gap-2">
              <CheckCircle size={24} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
              <Lock size={24} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[2px] uppercase font-bold text-white border border-green-500">
            {lesson.lessonType === 'live' ? 'ao vivo' : 'aula prática'}
          </span>
        </header>
        <span className="text-gray-200 mt-5 block">{lesson.title}</span>
      </a>
    </li>
  )
}

export default Lesson
