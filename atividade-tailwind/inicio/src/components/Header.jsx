const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="bg-white p-4">
      <nav className="flex justify-between items-center">

        <a href="#" className="text-xl font-bold text-amber-700">
          ☕ Grão Dourado
        </a>

        <ul className="hidden md:flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-amber-700">
                {link.texto}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}