import { itens } from "./data/data.js";
import { useState } from "react";
import CardItem from "./assets/cardItem.jsx";

function App() {
  const [categoriaSelecionada, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [modoLore, setModoLore] = useState(false);

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

      <div className="mt-4">
        {["Todos", "Arma", "Feitico", "Encantamento", "Boss"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategoria(cat);
              setModoLore(false);
            }}
            className="mx-1 my-2 px-4 py-2 border border-[#c9b46c] text-[#c9b46c] rounded-md hover:bg-[#c9b46c] hover:text-[#0d0d0d] transition"
          >
            {cat === "Arma" ? "Armas" :
             cat === "Feitico" ? "Feitiços" :
             cat === "Encantamento" ? "Encantamentos" :
             cat === "Boss" ? "Bosses" :
             "Todos"}
          </button>
        ))}

        <button
          onClick={() => setModoLore(true)}
          className="mx-1 my-2 px-4 py-2 border border-[#c9b46c] text-[#c9b46c] rounded-md hover:bg-[#c9b46c] hover:text-[#0d0d0d] transition"
        >
          Lore
        </button>
      </div>

      {modoLore ? (
        <div className="p-8 max-w-3xl mx-auto text-left">
          <button
            onClick={() => setModoLore(false)}
            className="mb-4 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-black transition"
          >
            Voltar
          </button>

          <h1 className="text-4xl text-[#c9b46c] mb-4">Lore de Elden Ring</h1>

          <p className="mb-4">
            O mundo de Elden Ring, conhecido como Lands Between, é governado pela Árvore Áurea
            e pela Ordem Dourada. A Rainha Marika era a portadora do Elden Ring.
          </p>

          <p className="mb-4">
            Após a destruição do Elden Ring, seus fragmentos foram espalhados entre os semideuses,
            iniciando uma guerra chamada The Shattering.
          </p>

          <p className="mb-4">
            Você é um Tarnished, chamado de volta para restaurar o Elden Ring e se tornar o novo Lorde.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-center mt-8 text-[#c9b46c] text-[56px] drop-shadow-[0_0_10px_rgba(201,180,108,0.5)]">
            Galeria de Itens e Personagens
          </h1>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-8">
            {itens
              .filter((item) => {
                const matchCategoria =
                  categoriaSelecionada === "Todos" ||
                  item.categoria === categoriaSelecionada;

                const texto = busca.toLowerCase().trim();

                const buscaNome = item.nome.toLowerCase().includes(texto);
                const buscaDescricao = item.descricao.toLowerCase().includes(texto);

                const buscaCinza =
                  texto.length > 0 &&
                  "cinza".startsWith(texto) &&
                  item.cinzaDeGuerra === true;

                const buscaHabilidade =
                  texto.length > 0 &&
                  ("habilidade".startsWith(texto) ||
                   "unica".startsWith(texto)) &&
                  item.habilidadeUnica === true;

                const buscaElemento =
                  texto.length > 0 &&
                  item.elemento &&
                  item.elemento.toLowerCase().includes(texto);

                const matchBusca =
                  texto === "" ||
                  buscaNome ||
                  buscaDescricao ||
                  buscaCinza ||
                  buscaHabilidade ||
                  buscaElemento;

                return matchCategoria && matchBusca;
              })
              .map((item) => (
                <CardItem key={item.id} item={item} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;