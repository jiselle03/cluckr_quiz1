exports.up = function(knex) {
    return knex.schema.createTable("clucks", table => {
        table.increments('id');
        table.string('username');
        table.string('avatar')
        table.string('image_url');
        table.text('content');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clucks');
};