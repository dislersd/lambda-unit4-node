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

exports.down = function(knex) {};
