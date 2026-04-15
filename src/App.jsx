import { itens } from "./data/data.js";
import { useState } from "react";
import CardItem from "./assets/cardItem.jsx";
import "./App.css";

function App() {
  const [categoriaSelecionada, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");

  return (
    <div>
      <div className="cabecalho">
        <header className="header">
          <div className="logo">
            <img src="src/assets/logo.png" alt="Logo" />
          </div>
          <div className="titulo">
            <h1>EldenWiki</h1>
          </div>
          <div className="busca">
            <input
              type="text"
              placeholder="Buscar..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button>Buscar</button>
          </div>
        </header>
      </div>
      <button onClick={() => setCategoria("Todos")}>Todos</button>
      <button onClick={() => setCategoria("Arma")}>Armas</button>
      <button onClick={() => setCategoria("Feitico")}>Feitiços</button>
      <button onClick={() => setCategoria("Encantamento")}>Encantamentos</button>

      <h1>Galeria de Itens</h1>
      <div className="itens-container">
        {itens
          .filter(
            (item) =>
              (categoriaSelecionada === "Todos" ||
                item.categoria === categoriaSelecionada) &&
              item.nome.toLowerCase().includes(busca.toLowerCase()),
          )
          .map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default App;
