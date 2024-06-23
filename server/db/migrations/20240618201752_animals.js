export async function up(knex) {
  return knex.schema.createTable('animals', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('species').notNullable()
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('animals')
}
