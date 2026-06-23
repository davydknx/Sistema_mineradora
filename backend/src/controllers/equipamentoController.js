import { supabase } from '../config/supabaseClient.js';

export const equipamentoController = {
  // Lista todos os equipamentos cadastrados no Supabase
  async listar(req, res) {
    try {
      const { data, error } = await supabase.from('equipamentos').select('*');
      if (error) throw error;
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria um novo equipamento recebendo as informações do Front-end
  async criar(req, res) {
    const { nome, setor } = req.body;
    try {
      const { data, error } = await supabase.from('equipamentos').insert([{ nome, setor }]).select();
      if (error) throw error;
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};