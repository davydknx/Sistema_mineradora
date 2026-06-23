import { supabase } from '../config/supabaseClient.js';

export const cidadeController = {
  // Lista todas as cidades
  async listar(req, res) {
    try {
      const { data, error } = await supabase
        .from('cidades')
        .select('*');

      if (error) throw error;

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria uma nova cidade
  async criar(req, res) {
    const { nome, estado } = req.body;

    try {
      const { data, error } = await supabase
        .from('cidades')
        .insert([{ nome, estado }])
        .select();

      if (error) throw error;

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};