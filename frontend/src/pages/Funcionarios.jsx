import React, { useState, useEffect } from 'react';
import { funcionarioService } from '../services/Api';

export default function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');

    useEffect(() => {
        carregarFuncionarios();
    }, []);

    const carregarFuncionarios = async () => {
        try {
            const response = await funcionarioService.listar();
            setFuncionarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar funcionários", error);
        }
    };

    const cadastrar = async () => {
        if (!nome || !cargo) return alert("Preencha todos os campos!");

        try {
            await funcionarioService.criar({ nome, cargo });
            setNome('');
            setCargo('');
            carregarFuncionarios();
        } catch (error) {
            console.error("Erro ao cadastrar funcionário", error);
        }
    };

    return (
        <div>
            <h2>Gestão de Funcionários</h2>

            <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                <h3>Novo Funcionário</h3>

                <input
                    type="text"
                    placeholder="Nome do Funcionário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <input
                    type="text"
                    placeholder="Cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <button onClick={cadastrar}>Cadastrar</button>
            </div>

            <h3>Funcionários Cadastrados</h3>

            <ul>
                {funcionarios.map(funcionario => (
                    <li key={funcionario.id}>
                        <strong>{funcionario.nome}</strong> - Cargo: {funcionario.cargo}
                    </li>
                ))}
            </ul>
        </div>
    );
}