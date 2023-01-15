exports.up = (knex) =>
  knex.schema.createTable('tickets', (tbl) => {
    tbl.increments()
    tbl.text('title').notNullable()
    tbl.text('description').notNullable()
    tbl.text('status').notNullable()
  })

exports.down = (knex) => knex.schema.dropTableIfExists('tickets')
