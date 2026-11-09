const numeros = [
  { valor: '15', legenda: 'anos de história' },
  { valor: '12', legenda: 'produtores parceiros' },
  { valor: '+50 mil', legenda: 'xícaras por ano' },
]

// EXERCÍCIO 5: sobre nós
export default function Sobre() {
  return (
    <section id="sobre" className="bg-stone-900 text-white p-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://picsum.photos/seed/coffeeshop/800/600"
          alt="Interior da cafeteria"
          className="w-full md:w-1/2 rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold text-amber-400">
            Nossa história
          </h2>

          <p className="mt-4">
            Tudo começou com uma pequena máquina de espresso e o sonho de servir
            o melhor café do bairro.
          </p>

          <p className="mt-4">
            Hoje trabalhamos diretamente com produtores do sul de Minas,
            garantindo qualidade e um preço justo para quem planta.
          </p>

          <ul className="mt-6 flex gap-6">
            {numeros.map((item) => (
              <li key={item.legenda}>
                <strong className="text-2xl text-amber-400">{item.valor}</strong>
                <p>{item.legenda}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}