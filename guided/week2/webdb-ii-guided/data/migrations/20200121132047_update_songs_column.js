exports.up = function(knex) {
  return knex.schema.table("songs", tbl => {
    tbl.renameColumn("artis", "artist");
  });
};

exports.down = function(knex) {};
