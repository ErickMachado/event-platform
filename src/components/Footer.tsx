import RocketseatLogo from '../assets/rocketseat-logo.svg'

type FooterProps = {
  className?: string
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={'p-6 border-t border-gray-500 flex items-center justify-between '.concat(
        className ?? ''
      )}
    >
      <div className="flex items-center gap-6">
        <img src={RocketseatLogo} alt="Logo da rocketseat na cor branca" />
        <span className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="text-gray-300 hover:underline">
        Políticas de privacidade
      </a>
    </footer>
  )
}

export default Footer
