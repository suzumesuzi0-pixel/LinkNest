const { supabase } = require('../config/supabase');

const TABLE = 'users';

const User = {
  async findById(id) {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async findByEmail(email) {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('email', email)
      .single();
    if (error) throw error;
    return data;
  },

  async create(userData) {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(userData)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase
      .from(TABLE)
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

module.exports = User;
