const {format} = require("date-fns")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert([
    {room_id: 1, subject: 'title 1', host_id: 1, date_created: format(new Date(), "MM/dd/yyyy HH:mm:ss")},
    {room_id: 2, subject: 'title 2', host_id: 2, date_created: format(new Date(), "MM/dd/yyyy HH:mm:ss")},
    {room_id: 3, subject: 'title 3', host_id: 3, date_created: format(new Date(), "MM/dd/yyyy HH:mm:ss")}
  ]);
};
