exports.up = function(knex) {
  return knex.schema.createTable('universidade', function(table){
    table.string('id').primary();
    table.string('nome').notNull();
    table.string('sigla');
    table.string('senha');
    table.boolean('excluido');
    table.string('endereco_id').references('id').inTable('endereco');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('universidade');
};