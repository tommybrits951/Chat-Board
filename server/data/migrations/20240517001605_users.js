/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("user_id").primary()
    tbl.string("user_email", 100).notNullable()
    tbl.string("username", 100).notNullable()
    tbl.string("password").notNullable()
    tbl.dateTime("joined").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
