/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, user_email: 'tommybrits74@gmail.com', username: "brits951", password: "$2b$08$C9L90sjrGyEmw5u2kdJAV.99y0DUK5sT8.18dW7zMuPWF3VoSNICu", joined: "05/13/2024 17:00:10"},
    {user_id: 2, user_email: 'doug951@gmail.com', username: "dougy2", password: "$2b$08$C9L90sjrGyEmw5u2kdJAV.99y0DUK5sT8.18dW7zMuPWF3VoSNICu", joined: "05/14/2024 18:00:10"},
    {user_id: 3, user_email: 'brett2@gmail.com', username: "brett2", password: "$2b$08$C9L90sjrGyEmw5u2kdJAV.99y0DUK5sT8.18dW7zMuPWF3VoSNICu", joined: "05/16/2024 19:00:10"},
    
  ]);
};
