exports.up = function(knex) {
  return knex.schema
    .createTable("author", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .index();
    })
    .createTable("publishers", tbl => {
      tbl
        .string("name", 128)
        .notNullable()
        .index();
    })
    .createTable("books", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .index();
      tbl
        .integer("publisher_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("publishers")
        .onDelete("RESTRICT") // what happens if the publisher with this id is deleted? You can restrict deletion unless you delete all entities with foreign key
        .onUpdate("CASCADE"); // what happens if the publisher id changes? Cascade = will update foreign key ids when primary key updates
    });
};

exports.down = function(knex) {
  // follow the relationships, delete the many side first
  return knex.schema
    .dropTableIfExists("books")
    .dropTableIfExists("publishers")
    .dropTableIfExists("author");
};
