const categorias = ["Arma", "Feitico", "Encantamento", "Boss"];

function FiltroCategorias({ categoriasSelecionadas, mudarCategoria }) {
  return (
    <div className="mt-4 text-center">
      {categorias.map((categ) => (
        <button
          key={categ}
          onClick={() =>  mudarCategoria(categ)}
          className={`mx-1 my-2 px-4 py-2 border rounded-md ${
            categoriasSelecionadas.includes(categ)
              ? "bg-[#c9b46c] text-[#0d0d0d]"
              : "text-[#c9b46c] border-[#c9b46c]"
          }`}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}

export default FiltroCategorias;