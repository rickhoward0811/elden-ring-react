function CardItem({ item }) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#c9b46c] rounded-xl p-4 text-center transition duration-300 shadow-[0_0_10px_rgba(201,180,108,0.1)] hover:scale-105 hover:shadow-[0_0_15px_rgba(201,180,108,0.4)]">
      
      <img
        src={item.imagem}
        alt={item.nome}
        className="w-full rounded-md mb-2"
      />

      <h2 className="text-[16px] text-[#e6d8a8]">
        {item.nome}
      </h2>

      <p className="text-[13px] text-[#b8aa7a]">
        {item.categoria}
      </p>

      <p className="text-[13px] text-[#b8aa7a]">
        {item.descricao}
      </p>
    </div>
  );
}

export default CardItem;