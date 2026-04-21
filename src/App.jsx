import { itens } from "./data/data.js";
import { useState } from "react";
import Header from "./assets/components/Header.jsx";
import FiltroCategorias from "./assets/components/FiltroCategorias.jsx";
import ListaItens from "./assets/components/ListaItens.jsx";

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
    <div className="min-h-screen w-full bg-[#0d0d0d] text-[#e6d8a8]">
      
      <Header busca={busca} setBusca={setBusca} />

      <FiltroCategorias
        categoriasSelecionadas={categoriasSelecionadas}
        toggleCategoria={toggleCategoria}
      />

      <h1 className="text-center mt-8 text-[#c9b46c] text-[56px]">
        Galeria de Itens
      </h1>

      <ListaItens
        itens={itens}
        categoriasSelecionadas={categoriasSelecionadas}
        busca={busca}
      />
    </div>
  );
}

export default App;