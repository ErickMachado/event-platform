import '@vime/core/themes/default.css'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image
} from 'phosphor-react'
import Footer from '../components/Footer'
import { DefaultUi, Player, Youtube } from '@vime/react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { LessonEntity } from '../types/lesson'

function LessonVideoArea() {
  const { lessonSlug } = useParams()
  const GET_LESSON_BY_SLUG = gql`
    query {
      lesson(where: { slug: "${lessonSlug}" }) {
        description
        id
        lessonType
        teacher {
          avatarURL
          bio
          name
        }
        title
        videoId
      }
    }
  `
  const { data } = useQuery<{ lesson: LessonEntity }>(GET_LESSON_BY_SLUG)

  return (
    <section className="flex-1 flex flex-col justify-between pb-6">
      {data ? (
        <>
          <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
              <Player>
                <Youtube videoId={data.lesson.videoId} />
                <DefaultUi />
              </Player>
            </div>
          </div>
          <div className="p-8 max-w-[1100px] mx-auto flex flex-col">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  {data.lesson.description}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={data.lesson.teacher.avatarURL}
                    alt={data.lesson.teacher.name}
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                  />
                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block">
                      {data.lesson.teacher.name}
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      {data.lesson.teacher.bio}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  className="p-4 text-small bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                >
                  <DiscordLogo size={24} />
                  Comunidade do Discord
                </a>
                <a
                  href=""
                  className="p-4 text-small border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-black transition-colors"
                >
                  <Lightning size={24} />
                  Acesse o desafio
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 my-20">
              <a
                href="#"
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Material complementar</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Acesse o material complementar para acelerar o seu
                    desenvolvimento
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>
              <a
                href="#"
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <Image size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Wallpapers exclusivos</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Baixe wallpapers exclusivos do Ignite lab e personalize a
                    sua máquina
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>
            </div>
          </div>
          <Footer className="w-full max-w-[1100px] mx-auto" />
        </>
      ) : (
        <h1>Carregando</h1>
      )}
    </section>
  )
}

export default LessonVideoArea
