import { useState, useEffect } from "react"
import Menu from "./components/Menu"
import Inicio from "./pages/Inicio"
import Equipamento from "./components/Equipamento" 

function App() {
    const [pagina, setPagina] = useState("inicio") 
    const [nome, setNome] = useState("")
    const [setor, setSetor] = useState("")
    const [equipamentos, setEquipamentos] = useState([])

    const [busca, setBusca] = useState("")
    const [equipamentosExibidos, setEquipamentosExibidos] = useState([])

    // Carrega os dados salvos ao iniciar a aplicação
    useEffect(() => {
        const dadosSalvos = localStorage.getItem("equipamentos")

        if (dadosSalvos) {
            const listaEquipamentos = JSON.parse(dadosSalvos)
            setEquipamentos(listaEquipamentos)
            setEquipamentosExibidos(listaEquipamentos)
        }
    }, [])

    // Salva sempre que a lista for alterada
    useEffect(() => {
        localStorage.setItem(
            "equipamentos",
            JSON.stringify(equipamentos)
        )
        setEquipamentosExibidos(equipamentos)
    }, [equipamentos])

    function cadastrar() {
        if (!nome || !setor) return alert("Preencha todos os campos!");

        const novoEquipamento = {
            nome: nome,
            setor: setor
        }

        setEquipamentos([...equipamentos, novoEquipamento])
        setNome("")
        setSetor("")

        alert("O equipamento foi cadastrado com sucesso!")
    }

    function buscarEquipamento() {
        const resultado = equipamentos.filter((equipamento) =>
            equipamento.nome
                .toLowerCase()
                .includes(busca.toLowerCase())
        )
        setEquipamentosExibidos(resultado)
    }

    function mostrarTodos() {
        setSetor("")
        setBusca("")
        setEquipamentosExibidos(equipamentos)
    }

    return (
        <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>

            <Menu setPagina={setPagina} />

            <hr />

            {/* Página Inicial */}
            {pagina === "inicio" && <Inicio />}

            {/* Página de Equipamentos */}
            {pagina === "equipamentos" && (
                <div>
                    <h2>Gestão de Equipamentos</h2>
                    
                    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                        <h3>Novo Equipamento</h3>
                        <input
                            type="text"
                            placeholder="Nome do Equipamento"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={{ marginRight: '10px' }}
                        />

                        <input
                            type="text"
                            placeholder="Setor (Ex: Extração)"
                            value={setor}
                            onChange={(e) => setSetor(e.target.value)}
                            style={{ marginRight: '10px' }}
                        />

                        <button onClick={cadastrar}>Cadastrar</button>
                    </div>

                    <h3>Equipamentos Cadastrados</h3>
                    <p>Total de Equipamentos cadastrados: {equipamentos.length}</p>

                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Buscar equipamento"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                        <button onClick={buscarEquipamento} style={{ marginRight: '10px' }}>Buscar</button>
                        <button onClick={mostrarTodos}>Mostrar Todos</button>
                    </div>

                    <ul>
                        {equipamentosExibidos.length > 0 ? (
                            equipamentosExibidos.map((equipamento, index) => (
                                <li key={index} style={{ marginBottom: '5px' }}>
                                    <Equipamento
                                        nome={equipamento.nome}
                                        setor={equipamento.setor}
                                    />
                                </li>
                            ))
                        ) : (
                            <p>Nenhum equipamento encontrado.</p>
                        )}
                    </ul>
                </div>
            )}

            {/* Telas vazias prontas para implementação futura */}
            {pagina === 'cidades' && (
                <div>
                    <h2>Gestão de Cidades</h2>
                </div>
            )}
            {pagina === 'funcionarios' && (
                <div>
                    <h2>Gestão de Funcionários</h2>
                </div>
            )}
            {pagina === 'servicos' && (
                <div>
                    <h2>Gestão de Serviços</h2>
                </div>
            )}

        </div>
    )
}

export default App