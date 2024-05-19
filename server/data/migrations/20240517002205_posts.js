/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("rooms", tbl => {
    tbl.increments("room_id").primary()
    tbl.integer("host_id").unsigned().references("user_id").inTable("users")
    tbl.string("subject").notNullable()
    tbl.dateTime("date_created").notNullable()
  })
  .createTable("posts", tbl => {
    tbl.increments("post_id").primary()
    tbl.integer("room_id").unsigned().references("room_id").inTable("rooms")
    tbl.integer("user_id").unsigned().references("user_id").inTable("users")
    tbl.string("title").defaultTo("Untitled")
    tbl.dateTime("date_posted").notNullable()
    tbl.string("content").notNullable()
    tbl.integer("favs").defaultTo(0)
    tbl.integer('likes').defaultTo(0)    
})
.createTable("comments", tbl => {
    tbl.increments("comment_id").primary()
    tbl.integer("user_id").unsigned().references("user_id").inTable("users")
    tbl.string("content").notNullable()
    tbl.dateTime("date_posted").notNullable()
    tbl.integer("post_id").unsigned().references("post_id").inTable("posts")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments").dropTableIfExists("posts").dropTableIfExists("rooms")
};
