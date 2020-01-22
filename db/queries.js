const knex = require("./client");

module.exports = {
  // get all
  getAll() {
    return knex("clucks").select("*");
  },
  // add
  add(cluck) {
    return knex("clucks").insert(cluck, "*");
  },
};