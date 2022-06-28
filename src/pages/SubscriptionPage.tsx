import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import IgniteLabLogo from '../assets/ignite-lab-logo.svg'
import Footer from '../components/Footer'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

function SubscriptionPage() {
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: { email, name }
    })
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat w-full">
      <section className="w-full max-w-[1216px] mx-auto flex items-start justify-between pt-20">
        <div>
          <img src={IgniteLabLogo} alt="Logo do Ignite lab" />
          <h1 className="font-bold text-[40px] max-w-[624px] mt-8">
            Construa uma{' '}
            <span className="text-blue-500">aplicação completa</span>, do zero,{' '}
            <span className="text-blue-500">com React JS</span>
          </h1>
          <p className="text-gray-200 max-w-[611px] mt-6">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-500 p-8 rounded w-full max-w-[391px]">
          <h2 className="font-bold text-2xl">Inscreva-se gratuitamente</h2>
          <form className="flex flex-col gap-2 mt-6">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="rounded bg-gray-900 min-h-[56px] pl-4 placeholder:text-gray-300"
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              className="rounded bg-gray-900 min-h-[56px] pl-4 placeholder:text-gray-300"
              onChange={({ target }) => setEmail(target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 mt-[13px] py-4 rounded font-bold uppercase text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </section>
      <section className="bg-mockup bg-center bg-no-repeat w-full h-[650px]"></section>
      <Footer />
    </div>
  )
}

export default SubscriptionPage
