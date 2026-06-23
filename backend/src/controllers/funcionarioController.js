import { supabase } from '../config/supabaseClient.js';

export const funcionarioController = {
  // Lista todos os funcionários
  async listar(req, res) {
    try {
      const { data, error } = await supabase
        .from('funcionarios')
        .select('*');

      if (error) throw error;

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria um funcionário
  async criar(req, res) {
    const { nome, cargo } = req.body;

    try {
      const { data, error } = await supabase
        .from('funcionarios')
        .insert([{ nome, cargo }])
        .select();

      if (error) throw error;

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};