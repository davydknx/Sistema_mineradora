import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import equipamentoRoutes from './routes/equipamentoRoutes.js';
import cidadeRoutes from './routes/cidadeRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import servicoRoutes from './routes/servicoRoutes.js';

dotenv.config();

const app = express();

// Permite que o seu projeto React acesse os dados dessa API de forma segura
app.use(cors());
app.use(express.json());

// Definição das rotas principais da Mineradora
app.use('/api/equipamentos', equipamentoRoutes);
app.use('/api/cidades', cidadeRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/servicos', servicoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});