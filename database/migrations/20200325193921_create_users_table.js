exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('full_name').notNullable()
        table.string('phone').notNullable()
        table.string('email').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};