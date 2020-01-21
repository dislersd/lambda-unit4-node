exports.up = function(knex) {
  // REMEMBER the return
  return knex.schema.createTable("songs", tbl => {
    tbl.increments();
    tbl.string("name", 255).index();
    tbl.integer("duration");
    tbl.string("artis", 255).index();
    tbl.boolean("favorite").defaultTo(false);
    // most RDBMS store 1 for true and 0 for false when it comes to boolean values
  });
};

// Down - How to undo changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("songs");
};
