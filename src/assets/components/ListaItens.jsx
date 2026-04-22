import CardItem from "./CardItem.jsx";

function ListaItens({ itens, categoriasSelecionadas, busca }) {
  const itensFiltrados = itens.filter((item) => {
    const passaCategoria =
      categoriasSelecionadas.length === 0 ||
      categoriasSelecionadas.every((categ) =>
        item.categoria.includes(categ)
      );

    const matchBusca = item.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    return passaCategoria && matchBusca;
  });

  if (itensFiltrados.length === 0) {
  return (
    <p className="text-center mt-10 text-[#c9b46c]">
      Nada encontrado
    </p>
  );
}

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-8">
      {itensFiltrados.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListaItens;