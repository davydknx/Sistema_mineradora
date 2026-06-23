import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import equipamentoRoutes from './routes/equipamentoRoutes.js';

dotenv.config();

const app = express();

// Permite que o seu projeto React acesse os dados dessa API de forma segura
app.use(cors());
app.use(express.json());

// Definição das rotas principais da Mineradora
app.use('/api/equipamentos', equipamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});