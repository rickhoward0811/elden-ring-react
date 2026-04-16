import { itens } from "./data/data.js";
import { useState } from "react";
import CardItem from "./assets/cardItem.jsx";

function App() {
  const [categoriasSelecionadas, setCategorias] = useState([]);
  const [busca, setBusca] = useState("");

  const toggleCategoria = (categoria) => {
    if (categoriasSelecionadas.includes(categoria)) {
      setCategorias(categoriasSelecionadas.filter((c) => c !== categoria));
    } else {
      setCategorias([...categoriasSelecionadas, categoria]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-[#e6d8a8] font-serif">

      <header className="flex items-center justify-between bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-[#c9b46c] px-8 py-4 relative">
        <div>
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-[150px] drop-shadow-[0_0_5px_#c9b46c]"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-[22px] tracking-[2px] text-[#c9b46c] drop-shadow-[0_0_8px_rgba(201,180,108,0.6)]">
          <h1>EldenWiki</h1>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="px-3 py-1 rounded-md border border-[#c9b46c] bg-[#0d0d0d] text-[#e6d8a8] placeholder-[#b8aa7a] outline-none"
          />
          <button className="px-3 py-1 rounded-md border border-[#c9b46c] text-[#c9b46c] hover:bg-[#c9b46c] hover:text-[#0d0d0d] transition">
            Buscar
          </button>
        </div>
      </header>

      <div className="mt-4 text-center">
        {["Arma", "Feitico", "Encantamento", "Boss"].map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategoria(cat)}
            className={`mx-1 my-2 px-4 py-2 border rounded-md transition ${
              categoriasSelecionadas.includes(cat)
                ? "bg-[#c9b46c] text-[#0d0d0d]"
                : "text-[#c9b46c] border-[#c9b46c] hover:bg-[#c9b46c] hover:text-[#0d0d0d]"
            }`}
          >
            {cat === "Arma"
              ? "Armas"
              : cat === "Feitico"
              ? "Feitiços"
              : cat === "Encantamento"
              ? "Encantamentos"
              : "Bosses"}
          </button>
        ))}
      </div>

      <h1 className="text-center mt-8 text-[#c9b46c] text-[56px] drop-shadow-[0_0_10px_rgba(201,180,108,0.5)]">
        Galeria de Itens
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-8">
        {itens
          .filter((item) => {
            const matchCategoria =
              categoriasSelecionadas.length === 0 ||
              categoriasSelecionadas.every((cat) =>
                item.categoria.includes(cat)
              );

            const matchBusca = item.nome
              .toLowerCase()
              .includes(busca.toLowerCase());

            return matchCategoria && matchBusca;
          })
          .map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default App;