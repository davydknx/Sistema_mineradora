import React, { useState, useEffect } from 'react';
import { servicoService } from '../services/Api';

export default function Servicos() {
    const [servicos, setServicos] = useState([]);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        carregarServicos();
    }, []);

    const carregarServicos = async () => {
        try {
            const response = await servicoService.listar();
            setServicos(response.data);
        } catch (error) {
            console.error("Erro ao buscar serviços", error);
        }
    };

    const cadastrar = async () => {
        if (!nome || !descricao) return alert("Preencha todos os campos!");

        try {
            await servicoService.criar({ nome, descricao });
            setNome('');
            setDescricao('');
            carregarServicos();
        } catch (error) {
            console.error("Erro ao cadastrar serviço", error);
        }
    };

    return (
        <div>
            <h2>Gestão de Serviços</h2>

            <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                <h3>Novo Serviço</h3>

                <input
                    type="text"
                    placeholder="Nome do Serviço"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <button onClick={cadastrar}>Cadastrar</button>
            </div>

            <h3>Serviços Cadastrados</h3>

            <ul>
                {servicos.map(servico => (
                    <li key={servico.id}>
                        <strong>{servico.nome}</strong> - {servico.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
}