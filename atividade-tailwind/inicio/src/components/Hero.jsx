// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section id="inicio" className="bg-amber-100 p-10 text-center">
      <h1 className="text-3xl font-bold text-amber-900">
        O café que abraça a sua manhã
      </h1>

      <p className="mt-4">
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a href="#cardapio" className="bg-amber-700 text-white p-3 rounded">
          Ver cardápio
        </a>

        <a href="#sobre" className="bg-white text-amber-800 p-3 rounded">
          Nossa história
        </a>
      </div>
    </section>
  )
}
