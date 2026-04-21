const categorias = ["Arma", "Feitico", "Encantamento", "Boss"];

function FiltroCategorias({ categoriasSelecionadas, toggleCategoria }) {
  return (
    <div className="mt-4 text-center">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => toggleCategoria(cat)}
          className={`mx-1 my-2 px-4 py-2 border rounded-md ${
            categoriasSelecionadas.includes(cat)
              ? "bg-[#c9b46c] text-[#0d0d0d]"
              : "text-[#c9b46c] border-[#c9b46c]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FiltroCategorias;