import { itens } from "./data/data.js";
import CardItem from "./assets/componentes/cardItem";

function App() {
  return (
    <div>
      <h1>Galeria de Itens</h1>

      {itens.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
      
    </div>
  );
}

export default App;