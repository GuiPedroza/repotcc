
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function(table){
    table.string('id').primary();
    table.string('nome').notNull();
    table.string('codigo').notNull();
    table.string('senha').notNull();
    table.boolean('excluido');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
