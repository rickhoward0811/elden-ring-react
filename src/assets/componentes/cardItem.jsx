function CardItem({ item }) {
    return(
        <div>
            <img src={item.imagem} alt={item.nome} width="150"/>
            <h2>{item.nome}</h2>
            <p>{item.categoria}</p>
            <p>{item.descricao}</p>
        </div>
    );
}

export default CardItem;