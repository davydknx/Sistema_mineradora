function Menu(props){
    return(
        <div className="menu">

        <button onClick={() => props.mudarPagina("inicio")}>Início</button>
        <button onClick={() => props.mudarPagina("cadastro")}>Cadastro</button>
        <button onClick={() => props.mudarPagina("relatorio")}>Relatório</button>

        </div>
    )
}
export default Menu