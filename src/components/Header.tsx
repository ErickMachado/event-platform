import IgniteLabLogo from '../assets/ignite-lab-logo.svg'

function Header() {
  return (
    <header className="w-full flex items-center justify-center py-5 bg-gray-700 border-b border-gray-600">
      <img src={IgniteLabLogo} alt="Logo do Ignite lab" />
    </header>
  )
}

export default Header
