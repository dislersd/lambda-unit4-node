exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("vin", 255).notNullable();
    tbl
      .string("make", 255)
      .notNullable()
      .index();
    tbl
      .string("model", 255)
      .notNullable()
      .index();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission", 255).nullable();
    tbl.string("title", 255).nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
