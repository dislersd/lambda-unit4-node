const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("steps.scheme_id", id)
    .orderBy("step_number", "asc");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(update, id) {
  return db("schemes")
    .update(update)
    .where({ id })
    .then(res => findById(id));
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
    .then(() => findById(id));
}
