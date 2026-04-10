import { itens } from "./data/data.js";
import { useState } from "react";
import CardItem from "./assets/componentes/cardItem";

function App() {
  const [categoriaSelecionada, setCategoria] = useState("Todos")
  return (
    <div>
      <button onClick={() => setCategoria("Todos")}>Todos</button>
      <button onClick={() => setCategoria("Arma")}>Armas</button>
      <button onClick={() => setCategoria("Feitico")}>Feitiços</button>
      <button onClick={() => setCategoria("Encantamento")}>Encantamentos</button>
      
      <h1>Galeria de Itens</h1>
      {itens.filter((item) => 
        categoriaSelecionada === "Todos" || item.categoria === categoriaSelecionada
      ).map((item) => (
        <CardItem key={item.id} item={item}/>
     ))}
    </div>
  );
}

export default App;