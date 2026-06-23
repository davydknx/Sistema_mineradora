import { supabase } from '../config/supabaseClient.js';

export const servicoController = {
  // Lista todos os serviços
  async listar(req, res) {
    try {
      const { data, error } = await supabase
        .from('servicos')
        .select('*');

      if (error) throw error;

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria um serviço
  async criar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const { data, error } = await supabase
        .from('servicos')
        .insert([{ nome, descricao }])
        .select();

      if (error) throw error;

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};