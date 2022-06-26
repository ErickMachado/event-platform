import { TeacherEntity } from './teacher'

export type LessonEntity = {
  availableAt: string
  description: string
  id: string
  lessonType: string
  teacher: TeacherEntity
  title: string
  slug: string
  videoId: string
}
